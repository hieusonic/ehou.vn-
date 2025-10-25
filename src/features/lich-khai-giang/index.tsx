import dynamic from "next/dynamic";
const Frame = dynamic(() =>
  import("@/components/Frame").then((mod) => mod.Frame)
);
const LayoutLkg = dynamic(() =>
  import("@/layouts/layoutNganh").then((mod) => mod.LayoutLkg)
);
export const LichKg = (list: any) => {
  return (
    <LayoutLkg>
      <Frame lists={list?.list} />
    </LayoutLkg>
  );
};
