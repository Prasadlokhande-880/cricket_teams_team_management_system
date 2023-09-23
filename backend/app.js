const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // Move this line before importing sign_upmodel
const sign_upmodel = require("./model/model");
const Team_model = require('./model/model_Team');
const app = express();
const port = 4000;
require('./database/mongo_db');

app.use(bodyParser.json()); // Use body-parser middleware

let name1='';

app.get('/slider_first_info', function (req, res) {
    res.json({
        users: [
        {
        icon:"fa-solid fa-medal",
        info:"join a program and become a champion",
        color:"rgb(255,108,23)"
        },
        {
        icon:"fa-solid fa-medal",
        info:"join a program and become a champion",
        color:"rgb(255,156,0)"
        },
        {
        icon:"fa-solid fa-medal",
        info:"join a program and become a champion",
        color:"rgb(255,108,23)"
        },
        {
        icon:"fa-solid fa-medal",
        info:"join a program and become a champion",
        color:"rgb(255,156,0)"
        }
    ]
    });
});


app.get('/slider_second_info', function (req, res) {
    res.json({
        users: [
        {
            img:"https://www.iloveindia.com/sports/pics/saina-nehwal.jpg",
            name:"time",
            info:"Never say never because limits, like fears,",
        },
        {
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SK_Uthappa.jpg/640px-SK_Uthappa.jpg",
            name:"time",
            info:"Never say never because limits, like fears,",
        },
        {
            img:"https://www.iloveindia.com/sports/pics/saina-nehwal.jpg",
            name:"time",
            info:"Never say never because limits, like fears,",
        },
        {
            img:"https://www.iloveindia.com/sports/pics/saina-nehwal.jpg",
            name:"time",
            info:"Never say never because limits, like fears,",
        },
        {
            img:"https://www.iloveindia.com/sports/pics/saina-nehwal.jpg",
            name:"time",
            info:"Never say never because limits, like fears,",
        }

    ]
    });
});


app.post("/signup_saving", async (req, res) => {
    try {
        const { name, email, PhoneNumber, password } = req.body;

        const model_to_save = new sign_upmodel({
            name,
            email,
            PhoneNumber,
            password
        });

        await model_to_save.save();

        // Send a success response or redirect to a success page
        res.json({ message: "User registered successfully" });
    } catch (err) {
        console.log("An error occurred:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/login_save',async(req,res)=>{
    try {
        const { name, password } = req.body;

        console.log(name, password);

        const user = await sign_upmodel.findOne({ name });

        if (!user) {
            res.send("User not found");
            return;
        }

        console.log(user);
        let correct;

        if(password===user.password){
            console.log("password is correct");
            correct=true;
        }
        else{
            console.log("password is wroung");
            correct=false;
        }

        if (correct) {
            console.log("Password is correct!");
            res.json({ message: "Login successful" });
            name1 = user.name;
        } else {
            console.log("Password is incorrect!");
            res.send("Incorrect password");
        }
    } catch (error) {
        console.log("An error occurred:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/username', (req, res) => {
    res.json({
        username1: name1
    });
});


// this is REST API for the get post request

app.post("/saveTeam",async(req,res)=>{

    try{
        const {_id,teamName,city,imgUrl,homeGround,owner,captain,coach,foundedYear}=req.body;
        console.log(_id,teamName,city,homeGround,owner,captain,coach,foundedYear);
        const savingModel= new Team_model({
            _id,
            teamName,
            city,
            imgUrl,
            homeGround,
            owner,
            captain,
            coach,
            foundedYear
        });

        await savingModel.save();

        res.json({ message: "User registered successfully" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "there is an error"});
    }
})


// this is the post req for the displayig the information

app.post("/displayALL", async (req, res) => {
    try {
      const value = {};

      const teams = await Team_model.find(value);

      console.log(teams);
      res.json(teams);
    } catch (err) {
      console.log("This is an error:", err); // Use the same variable name here
      res.status(500).json({ error: "An error occurred" });
    }
  });


// this is the function for finding using name

app.post("/displayName", async (req, res) => {
    try {

      const { name } = req.body;
      const teams = await Team_model.find({ teamName: name });
      console.log(teams);
      res.json(teams);

    }

    catch (err) {

      console.log("This is an error:", err);
      res.status(500).json({ error: "An error occurred" });

    }

});


  // this is the function for the finding Deleting

  app.delete("/deleteData", async (req, res) => {
    try {
      const _id = req.body._id;

      const deleted = await Team_model.findByIdAndDelete(_id);
      if (!deleted) {
        return res.status(404).json({ error: "Data not found" });
      }

      console.log("The data is deleted");
      console.log(deleted);

      res.json({ message: "Data deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    }
  });

  // this is the function for the updat the values of the team

  app.put("/updateData/:id", async (req, res) => {
    try {
      const _id = req.params.id; // Use the 'id' parameter from the route
      const updatedData = req.body; // Assuming you are sending updated data in the request body

      const updated = await Team_model.findByIdAndUpdate(_id, updatedData, { new: true });
      if (!updated) {
        return res.status(404).json({ error: "Data not found" });
      }

      console.log("The data is updated");
      console.log(updated);

      res.json({ message: "Data updated successfully", updatedData: updated });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    }
  });


  // this is the function for the geting all the data in the tems models

  app.get('/getallInfo', async (req, res) => {
    try {
      const filter = {}; // Define your filter here, e.g., { someField: 'someValue' }
      const all = await Team_model.find(filter);
      console.log(all);
      res.json(all);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  // this is the function for finding the value using the name
  app.get('/getTeamByName', async (req, res) => {
    try {
      const teamName = req.query.teamName; // Get the team name from the query parameter
      const team = await Team_model.findOne({ teamName }); // Fetch the team with the specified name
      console.log(team);

      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }

      res.json(team);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


app.listen(port, () => {
    console.log("Server is listening on port 4000");
});
