import express from "express";
import cors from "cors";
import { config } from "dotenv";
import multer from "multer";
import { Admin } from "./models/admin/admin.js";
import { Volunteer } from "./models/volunteer/volunteer.js";
import { sendOtp } from "./utils/sendOtp.js";
import { User } from "./models/user/user.js";
import { Health } from "./models/user/user-health.js";
import { Fundraiser } from "./models/user/user-funds.js";
import { Travel } from "./models/user/user-travel.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const app = express();
const router = express.Router();

config({ path: "config.env" });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  // console.log(req);
  console.log("Connected");
  res.json({
    message: "Connected Successfully",
  });
});

router.post("/login", async (req, res) => {
  const { email, type } = req.body;
  console.log(req.body);

  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  otp = Number(otp);

  if (type == "admin") {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(404).json({
        message: "Not a Valid User. Please Sign-up instead!",
      });
    } else {
      await Admin.findOneAndUpdate({ email: email }, { $set: { otp: otp } });
    }
    try {
      await sendOtp({
        subject: "VRIDHA MITR OTP",
        receiver: email,
        otp,
      });
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try after some time.",
      });
    }
  }
  if (type == "user") {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(404).json({
        message: "Not a Valid User. Please Sign-up instead!",
      });
    } else {
      await Admin.findOneAndUpdate({ email: email }, { $set: { otp: otp } });
    }
    try {
      await sendOtp({
        subject: "VRIDHA MITR OTP",
        receiver: email,
        otp,
      });
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try after some time.",
      });
    }
  }
  if (type == "volunteer") {
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      res.status(404).json({
        message: "Not a Valid User. Please Sign-up instead!",
      });
    } else {
      await Volunteer.findOneAndUpdate(
        { email: receiver },
        { $set: { otp: otp } }
      );
    }
    try {
      await sendOtp({
        subject: "VRIDHA MITR OTP",
        receiver,
        otp,
      });
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error. Please try after some time.",
      });
    }
  }
});
router.post(
  "/sign-up",
  upload.fields([{ name: "image" }, { name: "govid" }]),
  async (req, res) => {
    const { type, name, age, gender, email, number, address } = req.body;
    const image = req.files["image"][0];
    const govid = req.files["govid"][0];
    if (type == "admin") {
        const admin=await Admin.findOne({email})
        if(admin){
            res.status(404).json({
                message:"You are already registered. Log in instead"
            })
        } else{
            await Admin.create({
                name: name,
                age: age,
                gender: gender,
                mobileNumber: number,
                email: email,
                address: address,
                photo: {
                  data: image.buffer,
                  contentType: image.mimetype,
                },
                idPhoto: {
                  data: govid.buffer,
                  contentType: govid.mimetype,
                },
              });
              res.json({
                message: "Data Received Successfully",
              });
        }
      
    }
    if (type == "volunteer") {
        const volunteer=await Volunteer.findOne({email})
        if(volunteer){
            res.status(404).json({
                message:"You are already registered. Log in instead"
            })
        } else{
            await Volunteer.create({
                name: name,
                age: age,
                gender: gender,
                mobileNumber: number,
                email: email,
                address: address,
                photo: {
                  data: image.buffer,
                  contentType: image.mimetype,
                },
                idPhoto: {
                  data: govid.buffer,
                  contentType: govid.mimetype,
                },
              });
              res.json({
                message: "Data Received Successfully",
              });
        }
      
    }
    console.log(type, name, age, gender, email, number, address);
    // console.log(req.files);
    
  }
);

app.post("/otp-verify", async (req, res) => {
  const { otp, receiver, type } = req.body;

  if (type == "admin") {
    let checkUser = await Admin.findOne({ email: receiver });

    if (checkUser.otp == otp) {
      res.json({
        success: true,
        message: "User Authorized ",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "OTP is incorrect. ",
      });
    }
  }
  if (type == "volunteer") {
    let checkUser = await Admin.findOne({ email: receiver });

    if (checkUser.otp == otp) {
      res.json({
        success: true,
        message: "User Authorized ",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "OTP is incorrect. ",
      });
    }
  }
  if (type == "user") {
    let checkUser = await User.findOne({ email: receiver });

    if (checkUser.otp == otp) {
      res.json({
        success: true,
        message: "User Authorized ",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "OTP is incorrect. ",
      });
    }
  }
});

app.post('/update-location',async(req,res)=>{
  const{email, lat, long}=req.body;
  try{
    await User.findOneAndUpdate(
      {email:email},
      { $set: { 
        latitude: lat,
        longitude: long
       } }
    )
    res.json({
      message: "Data Received Successfully",
    });
  } catch(e){
    console.error("Error not found user:", error);
    res.status(500).send({ message: "User not found" });
  }
})

app.post('/get-users', async(req,res)=>{
  const {email}=req.body;
  try{
    const user=await Admin.findOne(
      {email},
    )
    console.log(user)
    res.json({
      usersArray : user.usersId,
      message: "Data Received Successfully",
    });
  } catch(e){
    console.error("Error not found user:", e);
    res.status(500).send({ message: "User not found" });
  }
})


app.post('/user-health',async(req,res)=>{

  const { name, age, email, mobile,emergency_contact, medical_history, blood_group, address } = req.body;

  const user=await Health.findOne({email})
      if(user){
          res.status(404).json({
              message:"This data for this user is already registered!"
          })
      } else{
          await Health.create({
              name: name,
              age: age,
              mobileNumber: mobile,
              email: email,
              address: address,
              emergencyContact: emergency_contact,
              bloodGroup: blood_group,
              address: address,
              medicalHistory: medical_history,
            });
      }
      res.json({
        message: "Data Received Successfully",
      });
})

app.post('/travel', upload.fields([{ name: "photo" }]),async(req,res)=>{

  const photo = req.files["photo"][0];
const { name, age, gender, mobileNumber, email , medicalConditions, source, destination, date, travelMode, specialRequirements, estimatedTravelCost, reimbursement, reimbursementAmount} = req.body;

const user=await Travel.findOne({email})
    if(user){
        res.status(404).json({
            message:"You already have one ongoing request!"
        })
    } else{
        await Travel.create({
            name: name,
            age: age,
            gender: gender,
            mobileNumber: mobileNumber,
            email: email,
            photo: {
              data: photo.buffer,
              contentType: photo.mimetype,
            },
            medicalConditions: medicalConditions,
            source: source,

            destination:destination,
            date:date,

            travelMode:travelMode,
            specialRequirements:specialRequirements,
            estimatedTravelCost:estimatedTravelCost,
            reimbursement:reimbursement,
            reimbursementAmount:reimbursementAmount,
          });
    }
    res.json({
      message: "Data Received Successfully",
    });
})


app.post('/fundraiser', upload.fields([{ name: "photo" }, { name: "qrcode" }]),async(req,res)=>{

    const photo = req.files["photo"][0];
    const qrcode = req.files["qrcode"][0];
  const { name, age, gender, mobileNumber, need, story, specificRequirement, duedate, amount, urgency, upiid , email } = req.body;

  const user=await Fundraiser.findOne({email})
      if(user){
          res.status(404).json({
              message:"You already have one ongoing request!"
          })
      } else{
          await Fundraiser.create({
              name: name,
              age: age,
              gender: gender,
              mobileNumber: mobileNumber,
              email: email,
              photo: {
                data: photo.buffer,
                contentType: photo.mimetype,
              },
              idPhoto: {
                data: qrcode.buffer,
                contentType: qrcode.mimetype,
              },
              need: need,
              story: story,
              specificRequirement: specificRequirement,
              duedate: duedate,
              amount: amount,
              urgency: urgency,
              upiid: upiid,
            });
      }
      res.json({
        message: "Data Received Successfully",
      });
})


app.post('/user-health',async(req,res)=>{

  const { name, age, email, mobile,emergency_contact, medical_history, blood_group, address } = req.body;

  const user=await Health.findOne({email})
      if(user){
          res.status(404).json({
              message:"This data for this user is already registered!"
          })
      } else{
          await Health.create({
              name: name,
              age: age,
              mobileNumber: mobile,
              email: email,
              address: address,
              emergencyContact: emergency_contact,
              bloodGroup: blood_group,
              address: address,
              medicalHistory: medical_history,
            });
      }
      res.json({
        message: "Data Received Successfully",
      });
})

app.post('/add-user', upload.fields([{ name: "photo" }, { name: "idPhoto" }]),async(req,res)=>{
    const { name, age, gender, email, mobileNumber, address, guardianMail, emergencyNumber, emergencyAddress } = req.body;
    const photo = req.files["photo"][0];
    const idPhoto= req.files["idPhoto"][0];
    const user=await User.findOne({email})
        if(user){
            res.status(404).json({
                message:"This user is already registered!"
            })
            return;
        } else{
            await User.create({
                name: name,
                age: age,
                gender: gender,
                mobileNumber: mobileNumber,
                email: email,
                address: address,
                photo: {
                  data: photo.buffer,
                  contentType: photo.mimetype,
                },
                idPhoto: {
                  data: idPhoto.buffer,
                  contentType: idPhoto.mimetype,
                },
                guardianMail:guardianMail,
                emergencyAddress:emergencyAddress,
                emergencyNumber:emergencyNumber,
              });
        }
        console.log(guardianMail)

        const admin=await Admin.findOne({email: guardianMail})
        const usersSet=new Set();
        let usersid=admin.usersId;
        if(usersid===undefined){
          usersSet.add(email)
        } else{
          for(const user of usersid){
            usersSet.add(user);
          }
          usersSet.add(email)
        }
        console.log(typeof(usersSet)+" wow "+usersSet)
        const usersArray=Array.from(usersSet)
        console.log(usersArray)

        await Admin.findOneAndUpdate({guardianMail},{
          $set: { 
            usersId: usersArray
           } 
        })
        res.json({
          message: "Data Received Successfully",
        });
})
router.post("/file", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).send({ message: "Admin not found" });
    // console.log(admin)
    const fileData = admin.idPhoto.data; // Retrieve idPhoto binary data
    const contentType = admin.idPhoto.contentType; // Retrieve idPhoto MIME type

    if (!fileData || !contentType)
      return res.status(404).send({ message: "File not found" });

    res.set("Content-Type", contentType); // Set response Content-Type header
    res.send(fileData); // Send binary data to the client
  } catch (error) {
    console.error("Error retrieving idPhoto:", error);
    res.status(500).send({ message: "Server error" });
  }
});

app.get("/register", async (req, res) => {
  res.json({
    message: "Connected Successfully",
  });
});

app.get("/logout", async (req, res) => {
  res.json({
    message: "Connected Successfully",
  });
});

app.use(router);

app.listen(3000, async (req, res) => {
  console.log("Server listening on PORT: 3000");
});
