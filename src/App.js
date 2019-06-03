import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames';
import injectSheet, { /*jss,*/ ThemeProvider } from "react-jss";
import style from './style'
import data from './data.json'


const Comp = ({ classes }) => {
  const showCard = () => (
    data.map((elem, index) => (
      <div className={classNames("col-12 col-sm-8 col-md-4 col-lg-4", classes.block)}>
        <div className={classNames('card text-center', classes.card)}>
          <div className={classNames("flex-column", classes.cardBody)}>
            <div className="p-2">
              <img className={classes.img} src={require(data[index].image + "")}></img>
            </div>
            <div className={classNames(classes.name, 'p-2 align-items-center')}>
              <span className={classes.align}>{data[index].name}</span>
            </div>
          </div>
        </div>
      </div>
    ))
  )

  return (
    <div className={classNames('App', 'container')}>
      <div className="row">
        {showCard()}
      </div>
    </div>
  );
}

const StyledComp = injectSheet(style)(Comp);
const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledComp />
  </ThemeProvider>
);

export default App;