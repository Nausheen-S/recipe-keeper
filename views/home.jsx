var React = require('react');

class Home extends React.Component {
  render() {
    const recipes = this.props.recipes.map(recipe=>
    {
        const link = '/recipes/'
        return <li>{recipe.name}</li>
    })
    return (
      <html>
        <body>
          <div>
            <h1>My Recipelist!!!</h1>
            <ul>{recipes}</ul>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;