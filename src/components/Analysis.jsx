import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Analysis = () => {
    const [value, setValue] = React.useState(0);
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    {/* Mobile device */}
    <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a map</label>
    <select 
    id="tabs" 
    value={value} 
    onChange={(e) => setValue(Number(e.target.value))}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500">
        <option value={0}>Heatmap</option>
        <option value={1}>Choropleth Map</option>
    </select>
</div>
     {/* Webpage */}
      <div className="hidden sm:block">
        <Box className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Heat Map" />
            <Tab label="Choropleth Map" />
          </Tabs>
        </Box>

        {/* Tab content */}
        <div className="mt-6">
          {value === 0 && (
            <img
              src="/maps/heatmap.png"
              alt="Heatmap"
              className="w-full h-auto rounded shadow"
            />
          )}
          {value === 1 && (
            <img
              src="/maps/choropleth.png"
              alt="Choropleth Map"
              className="w-full h-auto rounded shadow"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Analysis;

