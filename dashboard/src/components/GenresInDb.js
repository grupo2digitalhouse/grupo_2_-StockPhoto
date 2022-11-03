import React, {Component} from 'react';
import Genre from './Genre';


class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
        categories : []
        }
    }

    getAllCategories(url,handle){
        fetch(url)
            .then(response => response.json())
            .then(json => handle(json))
            .catch((error) => console.error(error))
    }


    componentDidMount(){
        this.getAllCategories('/api/categories', this.mostrarInfo);
    }

    mostrarInfo = (apiCategories) => {
        // console.log(data)
        this.setState({
            categories: apiCategories.data.map(category => {
                return{
                    name: category.category_name,
                }
            })
        })
        // console.log(this.state)
    }
    
    render(){
        return(
            <>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.categories.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }



}

export default GenresInDb;