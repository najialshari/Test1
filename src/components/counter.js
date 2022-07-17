import { useState } from "react"
import mystorage from "./firebase";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
const Counter = () => {

    const [file, setFile] = useState()
    const handlefirebase = (e) => {
        const imageRef = ref(mystorage, 'naji/file2')
        uploadBytes(imageRef, file).then(() => {
            console.log('ooooooooooooooooooooooo')
            }).then(() => {
                getDownloadURL(imageRef).then((res) => console.log(res))

            })
    }


    return (
        <>
            <h1>hi</h1>

            <form method='post' action="http://localhost:8000/api/v1/users/signin">
                <input type="text" id='file' name="usernameOrEmail"/>
                <input type="text" id='file' name="password"/>
                <input type="submit" value="Submit"/>
            </form>
            <form method='post' action="http://localhost:8000/api/v1/users/updateprofilepic">
                <input type="file"  id='file' name="file"/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Counter