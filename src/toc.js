const ListItem = props => (
  <div className="listItem">
    <a className="link" href={props.link}>
      {props.name}
    </a>
    <p className="time">{props.time}</p>
    <style jsx>{`
      .listItem {
        display: flex;
        justify-content: space-between;
        margin: .8em 0;
      }
      .time {
        margin: 0;
      }
    }
    `}</style>
  </div>
)

export default _ => (
  <div className="table">
    <ListItem
      name="Find a Place for Types and Flow"
      time="9:39"
      link="http://bit.ly/jaketrent-stylingreact-module1"
    />
    <ListItem
      name="Setup Your Project for Flow"
      time="11:26"
      link="http://bit.ly/jaketrent-stylingreact-module2"
    />
    <ListItem
      name="Start Your Project with Flow Types"
      time="40:00"
      link="http://bit.ly/jaketrent-stylingreact-module3"
    />
    <ListItem
      name="Add Flow Types to Your Existing Project"
      time="32:08"
      link="http://bit.ly/jaketrent-stylingreact-module4"
    />
    <ListItem
      name="Use Flow with Packages"
      time="11:08"
      link="http://bit.ly/jaketrent-stylingreact-module5"
    />
    <div className="totalContainer">
      <p className="total">Total Time</p>
      <p className="time">1h 44m</p>
    </div>
    <style jsx>{`
      .totalContainer {
        display: flex;
        justify-content: flex-end;
        margin: 2em 0 0 0;
      }
      .total {
        margin: 0 1em 0 0;
      }
      .time {
        margin: 0 0 0 2em;
      }
    `}</style>
  </div>
)
