const Home = () => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-6">
      What factors contribute to poor tree health in Woodside,
      Queens, and is traffic density one of them?
    </h1>
    <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
      <p>
        After analyzing large datasets of NYC's overall tree health, I decided 
        to narrow it down to Woodside, Queens, a residential neighborhood. l've 
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
        maintain healthier trees across differ
      </p>
    </div>
    </>
  );
};

export default Home;
