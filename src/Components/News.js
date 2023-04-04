import React from "react";
import Card from "./Card";
import "./News.css";

const News = () => {
  return (
    <div className="news_container">
      <h3 className="news_title">Aktualności</h3>
      <hr className="news_line" />
      <div className="news_cards">
        <Card
          image="https://picsum.photos/seed/lorem/500/200"
          title="Artykuł 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus, nibh nec ullamcorper iaculis, felis libero dignissim sapien, sed dapibus eros nulla quis ipsum. Quisque congue sapien quis sapien rhoncus, eu laoreet leo facilisis. Maecenas in vulputate sem. Vivamus quis massa diam. Nunc nec condimentum massa. In arcu sapien, tristique sed ex id, congue condimentum lorem. Mauris tincidunt maximus libero, eget fermentum quam tincidunt vitae. Aliquam molestie ullamcorper ipsum, quis efficitur mi interdum non."
        />
        <Card
          image="https://picsum.photos/seed/ipsum/500/200"
          title="Artykuł 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare mi arcu. Fusce ut est eros. Duis eleifend egestas justo et pellentesque. Cras sit amet faucibus mauris. Mauris nec odio dolor. Vivamus eget enim libero. Duis metus odio, rutrum eu lorem ut, luctus congue magna. Aliquam dignissim pellentesque ipsum. Cras dapibus, nulla sit amet iaculis laoreet, ligula odio rhoncus eros, at faucibus mauris quam vel quam. Fusce sed lectus molestie, molestie dolor vel, mattis magna. Pellentesque eu posuere ligula."
        />
        <Card
          image="https://picsum.photos/seed/dolor/500/200"
          title="Artykuł 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac dolor lacinia, pharetra diam ac, condimentum diam. Nam sit amet tempor arcu. Donec massa leo, lobortis eu lacus sed, rutrum pretium est. Sed blandit tincidunt mattis. In molestie ipsum nec nibh consectetur congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ornare ipsum nec ipsum varius efficitur. Nam fringilla consequat felis id interdum."
        />
      </div>
    </div>
  );
};
export default News;
