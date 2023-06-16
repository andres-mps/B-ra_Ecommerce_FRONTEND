import { Skeleton, Space } from "antd";
import "./ProductLoader.css";

function ProductLoader() {
  return (
    <>
      <Space className="product-skeleton-container">
        <Skeleton.Image active="true" className="product-loader" />
        <Skeleton.Image active="true" className="product-loader" />
        <Skeleton.Image active="true" className="product-loader" />
        <Skeleton.Image active="true" className="product-loader" />
      </Space>
    </>
  );
}

export default ProductLoader;
