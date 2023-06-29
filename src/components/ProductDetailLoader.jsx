import ContentLoader from "react-content-loader";

function ProductDetailLoader() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 ml-5 mb-5 d-flex justify-content-end">
            <ContentLoader
              speed={4}
              width={500}
              height={500}
              viewBox="0 0 500 500"
              backgroundColor="#f3f3f3"
              foregroundColor="#aaaaaa"
            >
              <rect x="0" y="0" rx="0" ry="0" width="300" height="500" />
            </ContentLoader>
          </div>
          <div className="col-12 col-md-6">
            <ContentLoader
              speed={2}
              width={500}
              height={500}
              viewBox="0 0 500 500"
              backgroundColor="#f3f3f3"
              foregroundColor="#aaaaaa"
            >
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="50" />
              <rect x="0" y="70" rx="0" ry="0" width="60%" height="30" />
              <rect x="0" y="120" rx="0" ry="0" width="30%" height="20" />
              <rect x="0" y="160" rx="0" ry="0" width="70%" height="20" />
              <rect x="0" y="200" rx="0" ry="0" width="80%" height="20" />
              <rect x="0" y="240" rx="0" ry="0" width="90%" height="20" />
              <rect x="0" y="280" rx="0" ry="0" width="60%" height="20" />
              <rect x="0" y="320" rx="0" ry="0" width="80%" height="20" />
              <rect x="0" y="360" rx="0" ry="0" width="70%" height="20" />
              <rect x="0" y="400" rx="0" ry="0" width="100%" height="10" />
              <rect x="0" y="420" rx="0" ry="0" width="100%" height="10" />
              <rect x="0" y="440" rx="0" ry="0" width="100%" height="10" />
              <rect x="0" y="460" rx="0" ry="0" width="100%" height="10" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailLoader;
