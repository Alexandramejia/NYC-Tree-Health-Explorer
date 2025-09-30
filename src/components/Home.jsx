import React from "react";
import treesImage from "../assets/trees.png"; // Make sure the path matches where your image is

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fef9e7] pt-28 px-0"> {/* full cream background, removed side padding */}
      
      {/* Cute title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#3b5a40] drop-shadow-md">
        What factors contribute to poor tree health in Woodside, Queens, 
        and is traffic density one of them?
      </h1>

      {/* Full-width cropped image with rounded edges */}
      <div className="w-full overflow-hidden mb-6">
        <img
          src={treesImage}
          alt="Trees in Woodside"
          className="w-full object-cover rounded-t-xl"
          style={{ maxHeight: "300px" }}
        />
      </div>

      {/* Green card for text */}
      <div className="max-w-3xl mx-auto bg-[#d4efd6] p-8 rounded-2xl shadow-lg border border-green-200 space-y-5 text-gray-800 leading-relaxed text-lg">
        <p>
          After analyzing large datasets of NYC's overall tree health, I decided 
          to narrow it down to Woodside, Queens, a residential neighborhood. I've 
          noticed that NYC tree patterns tend to bloom more in residential areas, 
          so I wanted to analyze why a neighborhood like Woodside would still have 
          poor tree health. I used QGIS to perform and display a proper tree health 
          analysis.
        </p>
        <p>
          As a computer science student, I decided not only to do a spatial data 
          analysis of tree health but also to build an interactive map that helps 
          users create their own spatial analysis of tree conditions. New York City 
          may be an urban area, but it's still important to take care of the little 
          plant life we have. Trees improve air and water quality, help balance 
          temperatures, and overall improve the quality of life for both animals and 
          citizens.
        </p>
        <p>
          That's why I believe it's important to study the causes of tree health, 
          especially in residential areas, so we can better address the problems and 
          maintain healthier trees across different neighborhoods.
        </p>
      </div>
    </div>
  );
};

export default Home;



