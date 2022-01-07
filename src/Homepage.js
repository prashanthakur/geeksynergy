import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion'


const url = "https://api.tvmaze.com/search/shows?q=boy";

export default class Homepage extends Component {

    constructor(){
        super()


        this.state={
            apiData:'',
            username: localStorage.getItem("Name")
        }
    }

    renderTable = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className='cards-show mt-4'>
                    <h2>{item.show.name}</h2>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.show.image.original}
                            alt="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.show.name},{item.show.language}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            Show id : {item.show.id}<br/>
                            Genres : {item.show.genres[0]},{item.show.genres[1]}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Rating:{item.show.rating.average}</Button>
                            <Button size="small">Status:{item.show.status}</Button>
                        </CardActions>
                    </Card>
                    </div>
                )
            })
        }else{
            return(
                <div style={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <h3 className='text-danger'>Loading...please wait</h3>
                </div>
            )
        }
    }


    render() {
        return (
            <>
            <div style={{backgroundColor:"#fff"}}>
                <h2 className='text-center'>Welcome {this.state.username}</h2>  
                {
                    this.renderTable(this.state.apiData)
                }
            </div>
            </>
        )
    }

    //api call
    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({apiData:data})
            console.log(this.state.apiData)
        })
    }
}
