import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(
    process.env.MONGO_URL,
    {
    useNewUrlParser: true,
    useFindAndModify: false
})

const db = mongoose.connection

const handleOpen = () => console.log("👌 Connected to DB")
const handleError = error => console.log (`❌ Error on DB Connection ${error}`)

db.once("open", handleOpen)
db.on("error", handleError)

// export const videos = [
//     {
//         id:514651,
//         title: 'Video awesome',
//         description: 'This is Sample',
//         views: 24,
//         videoFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//         creator: {
//             name: 'minha',
//             email: 'etchcure@gmail.com'
//         }
//     },
//     {
//         id:123456,
//         title: 'Video nice',
//         description: 'This is Sample',
//         views: 24,
//         videoFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//         creator: {
//             name: 'minha',
//             email: 'etchcure@gmail.com'
//         }
//     },
//     {
//         id:111111,
//         title: 'Video cool',
//         description: 'This is Sample',
//         views: 24,
//         videoFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//         creator: {
//             name: 'minha',
//             email: 'etchcure@gmail.com'
//         }
//     },
//     {
//         id:222222,
//         title: 'Video beautiful',
//         description: 'This is Sample',
//         views: 24,
//         videoFile: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//         creator: {
//             name: 'minha',
//             email: 'etchcure@gmail.com'
//         }
//     }
// ]