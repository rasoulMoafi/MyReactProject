// connection to our database


// tamame cod haye payin defaule mogodb hastn

import mongoose from "mongoose";

const connectToDatabese = async () => {
    // console.log(process.env.MONGO_URL);

    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`mongodb connected ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }

};


export default connectToDatabese;