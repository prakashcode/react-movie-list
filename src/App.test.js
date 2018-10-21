import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import App from "./App";
import MovieList from "./MovieList";
import Filters from "./Filters";
import MovieItem from "./MovieItem";
import MovieItemDetail from "./MovieItemDetail";
import MovieItemImage from "./MovieItemImage";
import GenreFilter from "./GenreFilter";
import RatingFilter from "./RatingFilter";
import GenreCheckBox from "./GenreCheckBox";

const movieListMock = {};
const genreListMock = {
  genres: [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    }
  ]
};

movieListMock.results = [
  {
    vote_count: 1275,
    id: 335983,
    video: false,
    vote_average: 6.6,
    title: "Venom",
    popularity: 445.302,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    original_language: "en",
    original_title: "Venom",
    genre_ids: [878, 28],
    backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    adult: false,
    release_date: "2018-10-03"
  },
  {
    vote_count: 685,
    id: 332562,
    video: false,
    vote_average: 7.6,
    title: "A Star Is Born",
    popularity: 203.796,
    poster_path: "/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    original_language: "en",
    original_title: "A Star Is Born",
    genre_ids: [18, 10402, 10749],
    backdrop_path: "/840rbblaLc4SVxm8gF3DNdJ0YAE.jpg",
    adult: false,
    release_date: "2018-10-03"
  },
  {
    vote_count: 582,
    id: 346910,
    video: false,
    vote_average: 5.3,
    title: "The Predator",
    popularity: 169.058,
    poster_path: "/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
    original_language: "en",
    original_title: "The Predator",
    genre_ids: [27, 878, 28, 53],
    backdrop_path: "/f4E0ocYeToEuXvczZv6QArrMDJ.jpg",
    adult: false,
    release_date: "2018-09-13"
  }
];

configure({ adapter: new Adapter() });

function setup(component) {
  return shallow(component);
}

describe("App", () => {
  it("Can render with no errors", () => {
    let wrapper = setup(<App />);
    expect(wrapper.find("h2").text()).toEqual(
      "Tech Task React Application - Movie List"
    );
  });

  it("Can render MovieList Component with no errors", () => {
    let wrapper = setup(<App />);
    expect(wrapper.find(MovieList)).toHaveLength(1);
  });
});

describe("MovieList", () => {
  const mockStore = configureMockStore();
  const store = mockStore(movieListMock);

  const props = {
    movieList: movieListMock,
    moviesFetchData: () => Promise.resolve()
  };

  it("GridView can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(".show-grid").exists());
  });

  it("MovieList Body area can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(".movieListBody").exists());
  });

  it("Component <MovieItem/> render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(MovieItem).exists());
  });
});

describe("MovieList", () => {
  const mockStore = configureMockStore();
  const store = mockStore(movieListMock);

  const props = {
    movieList: movieListMock,
    moviesFetchData: () => Promise.resolve()
  };

  it("GridView can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(".show-grid").exists());
  });

  it("MovieList Body area can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(".movieListBody").exists());
  });

  it("Component <MovieItem/> render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(MovieItem).exists());
  });

  it("Component <Filters/> render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(wrapper.find(Filters).exists());
  });
});

describe("MovieItem", () => {
  const props = {
    movieObj: {}
  };

  it("MovieItem element render with no errors", () => {
    let wrapper = setup(<MovieItem {...props} />);

    expect(wrapper.find(".movieItem").exists());
  });

  it("MovieItemBody element render with no errors", () => {
    let wrapper = setup(<MovieItem {...props} />);

    expect(wrapper.find(".movieItemBody").exists());
  });

  it("<MovieItemImage/> render with no errors", () => {
    let wrapper = setup(<MovieItem {...props} />);

    expect(wrapper.find(MovieItemImage).exists());
  });

  it("<MovieItemDetail/> render with no errors", () => {
    let wrapper = setup(<MovieItem {...props} />);

    expect(wrapper.find(MovieItemDetail).exists());
  });
});

describe("MovieItemDetail", () => {
  const props = {
    movieObj: {}
  };

  it("MovieDetails element render with no errors", () => {
    let wrapper = setup(<MovieItemDetail {...props} />);

    expect(wrapper.find(".movieDetails").exists());
  });

  it("Voting element render with no errors", () => {
    let wrapper = setup(<MovieItemDetail {...props} />);

    expect(wrapper.find(".voting").exists());
  });

  it("Release element render with no errors", () => {
    let wrapper = setup(<MovieItemDetail {...props} />);

    expect(wrapper.find(".release").exists());
  });
});

describe("MovieItemImage", () => {
  const props = {
    movieObj: {}
  };

  let wrapper = setup(<MovieItemImage {...props} />);

  expect(wrapper.find("img").exists());
});

describe("Filters", () => {
  it("FilterBox element can render with no errors", () => {
    let wrapper = setup(<Filters />);

    expect(wrapper.find(".filterBox").exists());
  });

  it("<RatingFilter/> can render with no errors", () => {
    let wrapper = setup(<Filters />);

    expect(wrapper.find(RatingFilter).exists());
  });

  it("<GenreFilter/> can render with no errors", () => {
    let wrapper = setup(<Filters />);

    expect(wrapper.find(GenreFilter).exists());
  });
});

describe("GenreFilter", () => {
  const mockStore = configureMockStore();
  const store = mockStore(genreListMock);

  const props = {
    genreList: genreListMock,
    genresFetchData: () => Promise.resolve()
  };

  it("<GenreCheckBox/> can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <GenreFilter />
      </Provider>
    );

    expect(wrapper.find(GenreCheckBox).exists());
  });
});

describe("GenreCheckBox", () => {
  const mockStore = configureMockStore();
  const store = mockStore(genreListMock);

  const props = {
    genreList: genreListMock,
    genresFetchData: () => Promise.resolve()
  };

  it("filterCheckBox element can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <GenreCheckBox />
      </Provider>
    );

    expect(wrapper.find(".filterCheckBox").exists());
  });
});

describe("RatingFilter", () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  it("filterRating element can render with no errors", () => {
    let wrapper = setup(
      <Provider store={store}>
        <RatingFilter />
      </Provider>
    );

    expect(wrapper.find(".filterCheckBox").exists());
  });
});
