import React, { Component } from "react";

import Card from './Card';
class Items extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            error: null,
            loading: false,
            meal: []
        };
    }

    // state = {
    //     loading: true,
    //     meal: null

    // };
    // componentDidMount(){
    //     const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    //     (async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState({meal: data, loading: false})
    //     console.log(data);
    // })();
    // }

    async componentDidMount() {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({ meal: data.meal.response[0], loading: true })
            })
            .catch(error => console.error(error));
    }
    handleClick() {

        console.log(this.state.meal);
    }


    // render(){
    //     return (
    //         <Card>
    //         <div>
    //         {this.state.loading || !this.state.meal ? <div>loading...</div>
    //         :<div>{meal.map(meal => <div>{meal.idMeal}</div>)} recipie title<div>recipie ingredients</div>
    //         <div>recipie instructions</div><img alt = "not showing"src={this.state.meal.strMealThumb}/>
    //         </div>}
    //         <button onClick={this.handleClick}>get recipie</button>
    //         </div>
    //         </Card>
    //     );





    // }
    render() {
            const { error, loading, meal } = this.state;

            if (error) {
                return ( <
                    div className = "col" >
                    Error: { error.message } <
                    /div>
                );
            } else if (!loading) {
                return ( <
                    div className = "col" >
                    Loading... <
                    /div>
                );
            } else {
                return ( <
                    div className = "col" >
                    <
                    h1 > Meal_ID < /h1> {
                        meal.map(meal => < div > { meal.idMeal } < /div>)} <
                            /div>
                        );

                        // if (this.state.loading) {
                        //   return <div>loading ...{1+1}</div>
                        // }

                        // if (this.state.meal===null) {
                        //    return <div>I guess you can't eat ...</div>
                        // }
                        // return(
                        //    <div>
                        //    {
                        //     this.state.meal.map((meal)=>{
                        //      return <> //React Fragment short syntax.
                        //       <div>{meal.meals.idMeal}</div>
                        //       <div>{meal.meals.strMeal}</div>
                        //       <div>{meal.meals.strCategory}</div>
                        //       <div>{meal.meals.strMealThumb}</div>
                        //       <div>{meal.meals.strYoutube}</div>
                        //       </>
                        //    })
                        //   }
                        //  </div>
                        // )
                    }
                }
            }

            export default Items;