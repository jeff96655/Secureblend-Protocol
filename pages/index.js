import { useEffect } from "react";
import Header from "../components/header";

const SecureBlendProtocol = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative bg-gray-100 w-full h-[5173px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-11xl text-white font-michroma md:h-[7350px]">
      <div className="my-0 mx-[!important] absolute top-[168px] left-[0px] w-[906px] flex flex-row items-center justify-end gap-[499px] z-[0] text-[40px] lg:w-[750px] lg:gap-[0px] md:w-[410px]">
        <div className="relative w-[38px] h-[63px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[388px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <span>{`SecureBlend `}</span>
          <span className="text-deepskyblue">Protocol</span>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[324px] left-[0px] w-[906px] flex flex-row items-end justify-end gap-[506px] z-[1] lg:w-[750px] md:w-[390px]">
        <div className="relative w-[31px] h-[79px] overflow-hidden shrink-0" />
        <img
          className="relative w-[350px] h-[350px] object-cover [&.animate]:animate-[20s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1]"
          alt=""
          src="/3d-abstract-colorful-form@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[785px] left-[0px] w-[1042px] flex flex-row items-start justify-end gap-[221px] z-[2] font-microsoft-himalaya lg:w-[900px] md:w-[400px]">
        <div className="flex flex-row items-center justify-start">
          <div className="relative w-[31px] h-[25px] overflow-hidden shrink-0" />
        </div>
        <div
          className="relative inline-block w-[650px] h-[230px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl md:w-[380px]"
          data-animate-on-scroll
        >
          groundbreaking privacy-preserving transactions project that introduces
          a Layer 2 solution to enhance privacy for blockchain transactions.
          SecureBlend leverages cutting-edge technologies like zk-SNARKs and
          zk-STARKs to provide zero-knowledge proofs for transaction validity
          without compromising transaction details. This project aims to
          redefine privacy in blockchain transactions, offering users a secure
          and confidential way to engage in cryptocurrency transactions.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1015px] left-[10px] flex flex-row items-center justify-start gap-[527px] z-[3] lg:w-[600px] lg:gap-[350px] md:flex-col md:gap-[0px] md:pr-[200px] md:box-border">
        <div className="relative w-[19px] h-[68px] overflow-hidden shrink-0" />
        <img
          className="relative w-[350px] h-[350px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/3d-abstract-vivid-form@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1423px] left-[2px] flex flex-row items-center justify-start gap-[381px] z-[4] font-microsoft-himalaya lg:w-0 lg:gap-[200px] md:gap-[0px] md:pt-20 md:box-border">
        <div className="relative w-[23px] h-[90px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[650px] h-[233px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl md:w-[380px]"
          data-animate-on-scroll
        >
          SecureBlend is a pioneering initiative designed to address the privacy
          concerns associated with traditional blockchain transactions. By
          implementing a Layer 2 solution that incorporates zk-SNARKs and
          zk-STARKs, SecureBlend ensures that transaction validity can be proven
          without revealing sensitive transaction details. This project is
          committed to establishing a new standard for privacy in the blockchain
          space, empowering users with the ability to conduct transactions with
          confidence and confidentiality.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1809px] left-[2px] w-[1496px] flex flex-row items-start justify-center gap-[315px] z-[5] text-lg font-podkova lg:w-[1200px] md:flex-col md:gap-[120px] md:pl-5 md:pt-[100px] md:box-border">
        <div className="relative w-[380px] h-[705px]">
          <div className="absolute top-[0px] left-[0px] w-[380px] h-[292px]">
            <div className="absolute top-[5px] left-[7px] bg-deepskyblue w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[285px] left-[10px] bg-yellow w-[3px] h-[362px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[8px] left-[8px] bg-fuchsia-100 w-[3px] h-[364px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[5px] left-[369px] bg-red w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[272px] left-[360px] rounded-[50%] bg-fuchsia-100 w-5 h-5" />
            <div
              className="absolute top-[272px] left-[360px] rounded-[50%] bg-yellow w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[360px] rounded-[50%] bg-deepskyblue w-5 h-5" />
            <div
              className="absolute top-[0px] left-[360px] rounded-[50%] bg-red w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
            <div
              className="absolute top-[0px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[272px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
            <div
              className="absolute top-[272px] left-[0px] rounded-[50%] bg-deepskyblue w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[31px] left-[35px] inline-block w-[310px]">
              <p className="m-0 text-3xl font-extrabold">Layer 2 Privacy</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                SecureBlend introduces a Layer 2 scaling solution, enhancing
                privacy by conducting transactions off-chain.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Users benefit from faster transaction confirmations and reduced
                transaction costs while maintaining robust privacy.
              </p>
            </div>
          </div>
          <div className="absolute top-[413px] left-[0px] w-[380px] h-[292px]">
            <div className="absolute top-[5px] left-[7px] bg-deepskyblue w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[285px] left-[10px] bg-yellow w-[3px] h-[362px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[8px] left-[8px] bg-fuchsia-100 w-[3px] h-[364px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[5px] left-[369px] bg-red w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[272px] left-[360px] rounded-[50%] bg-fuchsia-100 w-5 h-5" />
            <div
              className="absolute top-[272px] left-[360px] rounded-[50%] bg-yellow w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[360px] rounded-[50%] bg-deepskyblue w-5 h-5" />
            <div
              className="absolute top-[0px] left-[360px] rounded-[50%] bg-red w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
            <div
              className="absolute top-[0px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[272px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
            <div
              className="absolute top-[272px] left-[0px] rounded-[50%] bg-deepskyblue w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[33px] left-[34px] inline-block w-[310px]">
              <p className="m-0 text-3xl font-extrabold">
                Zero-Knowledge Proofs
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Leveraging zk-SNARKs and zk-STARKs, SecureBlend provides users
                with zero-knowledge proofs for transaction validity.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Transactions are cryptographically verified without disclosing
                specific details, ensuring a high level of privacy.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[380px] h-[705px]">
          <div className="absolute top-[0px] left-[0px] w-[380px] h-[292px]">
            <div className="absolute top-[5px] left-[7px] bg-deepskyblue w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[285px] left-[10px] bg-yellow w-[3px] h-[362px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[8px] left-[8px] bg-fuchsia-100 w-[3px] h-[364px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[5px] left-[369px] bg-red w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[272px] left-[360px] rounded-[50%] bg-fuchsia-100 w-5 h-5" />
            <div
              className="absolute top-[272px] left-[360px] rounded-[50%] bg-yellow w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[360px] rounded-[50%] bg-deepskyblue w-5 h-5" />
            <div
              className="absolute top-[0px] left-[360px] rounded-[50%] bg-red w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
            <div
              className="absolute top-[0px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[272px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
            <div
              className="absolute top-[272px] left-[0px] rounded-[50%] bg-deepskyblue w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[53px] left-[34px] inline-block w-[310px]">
              <p className="m-0 text-3xl font-extrabold">
                Confidential Transactions
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                SecureBlend ensures that transaction details, including amounts
                and addresses, remain confidential.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Users can engage in transactions without exposing sensitive
                information on the blockchain.
              </p>
            </div>
          </div>
          <div className="absolute top-[413px] left-[0px] w-[380px] h-[292px]">
            <div className="absolute top-[5px] left-[7px] bg-deepskyblue w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[285px] left-[10px] bg-yellow w-[3px] h-[362px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[8px] left-[8px] bg-fuchsia-100 w-[3px] h-[364px] overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[5px] left-[369px] bg-red w-[3px] h-[280px] overflow-hidden" />
            <div className="absolute top-[272px] left-[360px] rounded-[50%] bg-fuchsia-100 w-5 h-5" />
            <div
              className="absolute top-[272px] left-[360px] rounded-[50%] bg-yellow w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[360px] rounded-[50%] bg-deepskyblue w-5 h-5" />
            <div
              className="absolute top-[0px] left-[360px] rounded-[50%] bg-red w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
            <div
              className="absolute top-[0px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[272px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
            <div
              className="absolute top-[272px] left-[0px] rounded-[50%] bg-deepskyblue w-5 h-5 [&.animate]:animate-[1s_ease_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            />
            <div className="absolute top-[83px] left-[34px] inline-block w-[310px]">
              <p className="m-0 text-3xl font-extrabold">
                Decentralized Architecture
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                The project adopts a decentralized architecture, promoting
                trustlessness and ensuring that privacy is not compromised by
                central authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2671px] left-[9px] w-[996px] flex flex-row items-start justify-end gap-[475px] z-[6] text-xl lg:w-[800px] lg:gap-[0px] md:flex-col md:pl-[50px] md:pt-[800px] md:box-border">
        <div className="relative w-[46px] h-[66px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[479px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-lg md:w-[300px]"
          data-animate-on-scroll
        >
          SecureBlend is designed to provide privacy for a wide range of
          blockchain transactions usecases
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2870px] left-[2px] w-[1496px] flex flex-row items-start justify-center gap-[305px] z-[7] text-left text-3xl text-black font-podkova lg:w-[1170px] md:flex-col md:gap-[89px] md:pl-[15px] md:pt-[880px] md:box-border">
        <div className="relative w-[390px] h-[395px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(90deg,_#01f9f9,_#8f00ff)] w-[390px] h-[153px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[42px] left-[268px] w-[122px] h-[106px] overflow-hidden object-cover"
              alt=""
              src="/frame-11@2x.png"
            />
            <div className="absolute top-[11px] left-[10px] inline-block w-[258px]">
              <p className="m-0 font-extrabold">Everyday Transactions</p>
              <p className="m-0 text-lg">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-medium">
                    Confidentiality for day-to-day cryptocurrency transactions.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div
            className="absolute top-[242px] left-[0px] rounded-xl [background:linear-gradient(90deg,_#01f9f9,_#8f00ff)] w-[390px] h-[153px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[42px] left-[268px] w-[122px] h-[106px] overflow-hidden object-cover"
              alt=""
              src="/frame-111@2x.png"
            />
            <div className="absolute top-[0px] left-[11px] inline-block w-[257px]">
              <p className="m-0 font-extrabold">Business Transactions</p>
              <p className="m-0 text-lg">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-medium">
                    SecureBlend is suitable for businesses looking to protect
                    sensitive financial information.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[390px] h-[395px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(90deg,_#01f9f9,_#8f00ff)] w-[390px] h-[153px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[42px] left-[268px] w-[122px] h-[106px] overflow-hidden object-cover"
              alt=""
              src="/frame-112@2x.png"
            />
            <div className="absolute top-[10px] left-[16px] inline-block w-[258px]">
              <p className="m-0 font-extrabold">DeFi Platforms</p>
              <p className="m-0 text-lg">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-medium">
                    Enhanced privacy for decentralized finance applications and
                    transactions.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div
            className="absolute top-[242px] left-[0px] rounded-xl [background:linear-gradient(90deg,_#01f9f9,_#8f00ff)] w-[390px] h-[153px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[42px] left-[268px] w-[122px] h-[106px] overflow-hidden object-cover"
              alt=""
              src="/frame-113@2x.png"
            />
            <div className="absolute top-[16px] left-[10px] inline-block w-[258px]">
              <p className="m-0 font-extrabold">Token Transfers</p>
              <p className="m-0 text-lg">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-medium">
                    Privacy-preserving token transfers on various blockchain
                    networks.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3366px] left-[0px] w-[845px] flex flex-row items-start justify-end gap-[561px] z-[8] text-xl lg:w-[700px] lg:gap-[500px] md:w-[310px] md:gap-[0px] md:pt-[1400px] md:box-border">
        <div className="relative w-[37px] h-[73px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[222px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Road Map
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3493px] left-[0px] w-[1498px] flex flex-row items-start justify-center gap-[303px] z-[9] text-left text-lg font-podkova lg:w-[1200px] md:flex-col md:gap-[0px] md:pl-2.5 md:pt-[1350px] md:box-border">
        <div className="relative w-[391px] h-[780px]">
          <div className="absolute top-[10px] left-[9px] bg-red w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
          <div
            className="absolute top-[0px] left-[0px] rounded-[50%] bg-red w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[53px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">
              Phase 1: Inception and Planning
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Define project scope and objectives.</span>
              </li>
              <li className="mb-0">
                <span>Conduct market research and competitor analysis.</span>
              </li>
              <li className="mb-0">
                <span>Assemble a skilled team.</span>
              </li>
              <li className="mb-0">
                <span>Select technology stack.</span>
              </li>
              <li>
                <span>Legal and compliance review.</span>
              </li>
            </ul>
          </div>
          <div className="absolute top-[270px] left-[9px] bg-aqua w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[260px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
          <div
            className="absolute top-[260px] left-[0px] rounded-[50%] bg-aqua w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[313px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">
              Phase 2: Core Technologies Development
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Implement Layer 2 scaling solution.</span>
              </li>
              <li className="mb-0">
                <span>Integrate zk-SNARKs or zk-STARKs.</span>
              </li>
              <li className="mb-0">
                <span>Develop confidential transactions mechanism.</span>
              </li>
              <li className="mb-0">
                <span>Implement decentralized architecture.</span>
              </li>
              <li>
                <span>Start user interface development.</span>
              </li>
            </ul>
          </div>
          <div className="absolute top-[530px] left-[9px] bg-lime w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[520px] left-[0px] rounded-[50%] bg-aqua w-5 h-5" />
          <div
            className="absolute top-[520px] left-[0px] rounded-[50%] bg-lime w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[593px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">
              Phase 3: Alpha Release
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Conduct internal testing.</span>
              </li>
              <li className="mb-0">
                <span>Release alpha version to select users.</span>
              </li>
              <li>
                <span>Engage with the community for feedback.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-[391px] h-[790px]">
          <div className="absolute top-[10px] left-[9px] bg-fuchsia-200 w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime w-5 h-5" />
          <div
            className="absolute top-[0px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[76px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">Phase 4: Beta Release</p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Address issues from alpha release.</span>
              </li>
              <li className="mb-0">
                <span>Release beta version to a wider audience.</span>
              </li>
              <li>
                <span>Create comprehensive documentation.</span>
              </li>
            </ul>
          </div>
          <div className="absolute top-[270px] left-[9px] bg-yellow w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[260px] left-[0px] rounded-[50%] bg-fuchsia-100 w-5 h-5" />
          <div
            className="absolute top-[260px] left-[0px] rounded-[50%] bg-yellow w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[328px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">
              Phase 5: Mainnet Launch
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Conduct security audits.</span>
              </li>
              <li className="mb-0">
                <span>Officially launch SecureBlend on the mainnet.</span>
              </li>
              <li>
                <span>Execute marketing strategy.</span>
              </li>
            </ul>
          </div>
          <div className="absolute top-[530px] left-[9px] bg-blue w-[3px] h-[250px] overflow-hidden" />
          <div className="absolute top-[520px] left-[0px] rounded-[50%] bg-yellow w-5 h-5" />
          <div
            className="absolute top-[520px] left-[0px] rounded-[50%] bg-blue w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[770px] left-[0px] rounded-[50%] bg-red w-5 h-5" />
          <div
            className="absolute top-[770px] left-[0px] rounded-[50%] bg-blue w-5 h-5 [&.animate]:animate-[1s_linear_0s_infinite_alternate-reverse_forwards_fade-in] opacity-[0]"
            data-animate-on-scroll
          />
          <div className="absolute top-[572px] left-[32px] inline-block w-[359px]">
            <p className="m-0 text-3xl font-extrabold">
              Phase 6: Post-Launch Enhancements and Expansion
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                <span>Grow the community.</span>
              </li>
              <li className="mb-0">
                <span>Implement feature enhancements based on feedback.</span>
              </li>
              <li className="mb-0">
                <span>Explore partnerships and integrations.</span>
              </li>
              <li>
                <span>
                  Stay at the forefront of privacy and blockchain advancements.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4333px] left-[2px] w-[843px] flex flex-row items-center justify-end gap-[514px] z-[10] lg:w-[700px] lg:gap-[400px] md:w-[410px] md:flex-col md:gap-[200px] md:pt-[2000px] md:box-border">
        <div className="relative w-[37px] h-[61px] overflow-hidden shrink-0" />
        <img
          className="relative w-[350px] h-[350px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/3d-abstract-vivid-form1@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4737px] left-[0px] w-[1005px] flex flex-row items-center justify-end gap-[345px] z-[11] font-microsoft-himalaya lg:w-[900px] md:w-[410px] md:flex-row md:gap-[0px] md:pt-[2300px] md:pr-0 md:box-border">
        <div className="relative w-[30px] h-[60px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[650px] h-[164px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl md:w-[400px]"
          data-animate-on-scroll
        >
          SecureBlend is at the forefront of the privacy-preserving transactions
          revolution, offering a Layer 2 solution that combines advanced
          cryptographic techniques with user-friendly accessibility. Join us in
          redefining privacy standards in the blockchain space and empowering
          users with confidential and secure transactions.
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[5071px] left-[2px] w-[323px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border gap-[32px] z-[12] md:pt-[2200px] md:box-border"
        data-scroll-to="frameContainer"
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame43@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame44@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame45@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame46@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <Header />
    </div>
  );
};

export default SecureBlendProtocol;
