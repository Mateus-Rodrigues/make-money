import { Image, Text, View } from "react-native"
import icons from "../../constants/icons.js";
import {styles} from "../home/home.style.js";


const Home = () => {
    return (<View>
        <Image source={icons.db} styles />
    </View>
    );
} 

export default Home;