import React, {Component} from 'react';
import SmallCard from './SmallCard';
//import MovieList from './MovieList';

class ContentRowPhoto extends Component{
    constructor(){
        super()
        this.state ={
        photos: 0,
        users: 0,
        categories: 0
        }
    }

    getAll(url,handle){
        fetch(url)
            .then(response => response.json())
            .then(json => handle(json))
            .catch((error) => console.error(error))
    }


    componentDidMount(){
        this.getAll('/api/products', this.mostrarInfoMovies);
        this.getAll('/api/categories', this.mostrarInfoCategories);
        this.getAll('/api/users', this.mostrarInfoUsers);
    }

    mostrarInfoMovies = (apiMovies) => {
        this.setState({
            photos: apiMovies.count
        })
    }

    mostrarInfoCategories = (apiCategories) => {
        this.setState({
            categories: apiCategories.count
        })
    }

    mostrarInfoUsers = (apiUsers) => {
        this.setState({
            users: apiUsers.count
        
        })
    }


    arrayInformacion(){
        let productInDataBase = {
            color:   "primary",
            titulo: "Products in Data Base",
            valor: this.state.photos,
            icono: "fas fa-film",
        }
        
        let categoriesInDataBase ={
            color:   "success",
            titulo: "Total categories",
            valor: this.state.categories,
            icono: "fas fa-award",
        }
        
        let usersInDataBase = {
            color:   "warning",
            titulo: "Users in database",
            valor: this.state.users,
            icono: "fas fa-user",
        }

        return [productInDataBase,categoriesInDataBase,usersInDataBase];
    }

    
    render(){
        return(
            <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                this.arrayInformacion().map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
        );
    }



}

export default ContentRowPhoto;