import React,{useState,Fragment,useEffect} from 'react'
import FoodList from '../components/foods/FoodList'
import styles from './AllFoods.module.css';
import axios from 'axios'

const AllFoods = () =>{

	const [foods,setFoods]=useState([]);

	useEffect(()=>{
		async function getFoods(){
			try {
				const res=await axios.get('https://food-app-mern-server.herokuapp.com/allfoods')
				console.log(res);
				setFoods(res.data);
			} catch(e) {

				console.log(e+"Unable to Fetch Data From Server");
			}
		}
		getFoods();
	},[])

	return(
		<Fragment>
		    <section className={styles.poster}>
                <img src={"https://c4.wallpaperflare.com/wallpaper/865/337/65/wine-red-glasses-grapes-wallpaper-preview.jpg"} alt="table full of meals"/>
            </section>
		    <FoodList foods={foods}/>
		</Fragment>
	)
}

export default AllFoods;