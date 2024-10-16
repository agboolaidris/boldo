import Image from "next/image";

import { BodyText, Title } from "@ui/Text";
import { Navbar } from "../components/Navbar";
import { Wrapper } from "@ui/Wrapper";
import { Button } from "@ui/Button";
import { Brands } from "./common/Brand";
import { Services } from "./common/Service";
import { Testimonial } from "./common/Testimonial";
import { Blogs } from "./common/Blog";
import { Subscription } from "./common/Subscription";
import { WorkSpace } from "./common/WorkSpace";
import { FadeIn } from "@ui/Fadein";

export default function Home() {
  return (
    <main>
      <header className="relative">
        <Image src="/bg.svg" alt="bg" fill objectFit="cover" />
        <div className="relative z-40">
          <Navbar />
          <Wrapper className="gap-12 grid lg:grid-cols-2">
            <FadeIn>
              <div className="py-8 sm:py-16 w-full max-w-xl ">
                <Title className="text-white">
                  Save time by building fast with Boldo Template
                </Title>
                <BodyText className="!font-manrope mt-6 !text-gray-400 leading-loose">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </BodyText>
                <div className="mt-10 flex gap-8">
                  <Button kinds="active" rounded size="lg">
                    Buy template
                  </Button>
                  <Button kinds="normal" rounded size="lg">
                    Explore
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="hidden lg:block">
                <div className="ml-auto relative aspect-square w-full flex-1 max-w-lg">
                  <Image src="/chart.svg" alt="" fill />
                </div>
              </div>
            </FadeIn>
          </Wrapper>
          <Wrapper>
            <Brands />
          </Wrapper>
        </div>
      </header>

      <section className="py-16 sm:py-32">
        <Wrapper size="lg">
          <Services />
        </Wrapper>
      </section>

      <section className="py-16 sm:py-32 bg-brand-blue">
        <Wrapper>
          <Testimonial />
        </Wrapper>
      </section>

      <section className="py-16 sm:py-32">
        <Wrapper size="lg">
          <WorkSpace />
        </Wrapper>
      </section>

      <section className="py-16 sm:py-32">
        <Wrapper size="lg">
          <Blogs />
        </Wrapper>
      </section>

      <section>
        <Wrapper className="bg-brand-blue py-16 sm:py-32 rounded-xl">
          <Subscription />
        </Wrapper>
      </section>
    </main>
  );
}
