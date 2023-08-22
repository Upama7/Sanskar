import Cover from "@/components/Cover";
import FAQ from "@/components/FAQ";
import Member from "@/components/Member/Member";

import Slider from "@/components/Slider";
import Success from "@/components/Success";

import TDiv from "@/components/card/TDiv";
import Company from "@/components/company/Company";
import SDiv from "@/components/ser/SDiv";
import Touch from "@/components/touch/Touch";

export default function Home() {
  return (
    <main>
      <Cover />
      <Success />
      <SDiv />
      <TDiv />
      <Slider />
      <Member />
      <Company />
      <Touch />
      <FAQ />
    </main>
  );
}
