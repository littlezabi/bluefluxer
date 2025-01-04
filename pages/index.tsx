import Layout from "../components/layout";
import MidView from "../components/mid-view";
import { data } from "./data";
import { useInView } from "react-intersection-observer";
import RenderCategory from "../components/render-category";
export default function Home() {
  return (
    <Layout title='HOME page'>
      <MidView />
      <div className='page-size product-categories'>
        {data.map((item: any, index: number) => {
          return <RenderCategory item={item} key={index} />;
        })}
      </div>
      <div className='page-size supera-title'>
        <h2>New Arrivals</h2>
      </div>
      <div className='page-size product-categories'>
        {data.map((item: any, index: number) => {
          if (index >= 4) return;
          return <RenderCategory item={item} key={index} />;
        })}
      </div>
    </Layout>
  );
}
