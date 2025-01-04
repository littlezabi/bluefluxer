import { useInView } from "react-intersection-observer";

export default function RenderCategory({ item }: any) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px 0px -50px 0px",
  });
  return (
    <section
      ref={ref}
      className={inView ? "slide-in-obsrvr" : "slide-in-obsrvr-init"}
    >
      <span className='title'>{item.title}</span>
      <picture>
        <img src={item.image} alt={item.title} />
      </picture>
      <a href={item.link}>see more</a>
    </section>
  );
}
