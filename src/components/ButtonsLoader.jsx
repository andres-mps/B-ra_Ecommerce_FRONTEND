import { Skeleton, Space } from "antd";
function ButtonsLoader({ cant }) {
  let toRender = [];
  for (let i = 0; i < cant; i++) {
    toRender.push(0);
  }
  return (
    <>
      <Space>
        {toRender.map(() => {
          return <Skeleton.Button active="true" size="large" shape="round" block="false" />;
        })}
      </Space>
    </>
  );
}

export default ButtonsLoader;
