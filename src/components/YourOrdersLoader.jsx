import ContentLoader from "react-content-loader";

function YourOrdersLoader() {
  return (
    <>
      <div className="container-fluid mt-5">
        <ContentLoader
          speed={2}
          width="100%"
          height={100}
          viewBox="0 0 100% 100%"
          backgroundColor="#f3f3f3"
          foregroundColor="#aaaaaa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="50" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width="100%"
          height={100}
          viewBox="0 0 100% 100%"
          backgroundColor="#f3f3f3"
          foregroundColor="#aaaaaa"
        >
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="50" />
        </ContentLoader>
      </div>
    </>
  );
}

export default YourOrdersLoader;
