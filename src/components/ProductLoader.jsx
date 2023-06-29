import ContentLoader from "react-content-loader";

function ProductLoader() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div style={{ width: "80%" }}>
              <ContentLoader
                speed={4}
                width="100%"
                height={500}
                viewBox="0 0 500 500"
                backgroundColor="#f3f3f3"
                foregroundColor="#aaaaaa"
              >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            </div>
          </div>
          <div className="d-none d-sm-block col-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div style={{ width: "80%" }}>
              <ContentLoader
                speed={4}
                width="100%"
                height={500}
                viewBox="0 0 500 500"
                backgroundColor="#f3f3f3"
                foregroundColor="#aaaaaa"
              >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            </div>
          </div>
          <div className="d-none d-md-block  col-md-4 col-lg-3 d-flex justify-content-center">
            <div style={{ width: "80%" }}>
              <ContentLoader
                speed={4}
                width="100%"
                height={500}
                viewBox="0 0 500 500"
                backgroundColor="#f3f3f3"
                foregroundColor="#aaaaaa"
              >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            </div>
          </div>
          <div className="d-none d-lg-block  col-lg-3 d-flex justify-content-center">
            <div style={{ width: "80%" }}>
              <ContentLoader
                speed={4}
                width="100%"
                height={500}
                viewBox="0 0 500 500"
                backgroundColor="#f3f3f3"
                foregroundColor="#aaaaaa"
              >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductLoader;
