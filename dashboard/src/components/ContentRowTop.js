import React, {Component} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

class ContentRowTop extends Component{
    constructor(){
        super()
        this.state ={
        photos: {}
        }
    }

    getAllProducts(url,handle){
        fetch(url)
            .then(response => response.json())
            .then(json => handle(json))
            .catch((error) => console.error(error))
    }


    componentDidMount(){
        this.getAllProducts('/api/products', this.mostrarInfo);
    }

    mostrarInfo = (apiProducts) => {
        // console.log(apiProducts.data.slice(-1)[0])
		// console.log(apiProducts.data.slice(-1)[0].id)
		let lastMovie = apiProducts.data.slice(-1)[0];
		// console.log(lastMovie.id)
        this.setState({
            photos: lastMovie
        })
        // console.log(this.state.photos)
		// console.log(this.state)
    }
    
    render(){
        return(
            <>
			<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<h6>{this.state.photos.name }</h6>
										{/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}
									</div>
									<div>
										<ul>
											<li>ID: {this.state.photos.id}</li>
											<li>Price: {this.state.photos.price}</li>
											<li>Description: {this.state.photos.description}</li>
											<li>Link: {this.state.photos.image}</li>
										</ul>
									</div>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}
 
            </>
        );
    }



}

export default ContentRowTop;