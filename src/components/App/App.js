import { useRef } from "react";
import logo from "../../assets/DeSmart-logo-black-500px.png";
import data from "../../utils/data";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import useFilter from "../useFilter";
import "./App.css";
import ListItem from "../ListItem/ListItem";

const App = () => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 240,
    })
  );

  const { items, onClick, isSelected } = useFilter([]);
  //Storing selected items
  let selectedItems = items.join(", ");
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Please select multiple items:</p>
      </header>
      <div style={{ width: "100%", height: "80vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={data.length}
              rowRenderer={({ key, index, style, parent }) => {
                const listItem = data[index];

                return (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
                    <div style={style}>
                      <ListItem data={listItem} selected={isSelected(listItem.id)} onClick={onClick} />
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
        {console.log(selectedItems)}
      </div>
    </div>
  );
};

export default App;
