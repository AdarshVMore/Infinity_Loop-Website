import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";
import dumy from "../../assets/images/grayrectangle.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const [toggleValue, setToggleValue] = useState(1);

  const timelineRef = useRef(null);
  const eachtimelineRef = useRef(null);

  useEffect(() => {
    const timelineHeader = timelineRef.current;
    const eachtimeline = eachtimelineRef.current;

    gsap.fromTo(
      ".timelineHeader",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: timelineHeader,
          start: "top 70%",
          end: "bottom 20%",
          // toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".p",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timelineHeader,
          start: "top 70%",
          end: "bottom 20%",
          // toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".point",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 1.5,
        scrollTrigger: {
          trigger: eachtimeline,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  });

  return (
    <div className="timeline" id="roadmap">
      <span className="timelineHeader" ref={timelineRef}>
        <div className="heading days-one ">Roadmap</div>
        <div className="sub-heading gray">
          Explore the Fascinating Time Line of our Release, Witnessing the
          Evolution and Milestones of Innovation Unfold!
        </div>
      </span>
      <div className="toggle-btns">
        <div
          className={`toggle ${toggleValue === 1 ? `p1` : ``} ${
            toggleValue === 2 ? `p2` : ``
          } ${toggleValue === 3 ? `p3` : ``}`}
        ></div>
        <p
          onClick={() => {
            setToggleValue(1);
          }}
          className="p"
        >
          Phase I
        </p>
        <p
          onClick={() => {
            setToggleValue(2);
          }}
          className="p"
        >
          Phase II
        </p>
        <p
          onClick={() => {
            setToggleValue(3);
          }}
          className="p"
        >
          Phase III
        </p>
      </div>
      <div className="phases">
        {toggleValue === 1 ? (
          <>
            <div className="phase-no">Launch</div>
            <div className="line"></div>

            <div className="each-point each-timeline" ref={eachtimelineRef}>
              <div className="point ">
                <div className="left">
                  <div className="point-name">Website Launch</div>
                  <div className="point-description">
                    Design and launch an engaging website that showcases the
                    Loop of Infinity game, its features, and benefits.
                    <br /> Optimize the website for mobile devices to provide a
                    seamless browsing experience.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">Develop Whitepaper</div>
                  <div className="point-description">
                    Prepare a comprehensive whitepaper outlining the game's
                    objectives, gameplay mechanics, token economy, and future
                    development plans.
                  </div>
                </div>
              </div>
              <div className="point">
                <div className="left">
                  <div className="point-name">Deploy Token Smart Contract</div>
                  <div className="point-description">
                    Develop and deploy a secure and audited smart contract for
                    the game's security issues "LOI Token" on a Polygon and
                    Ethereum blockchain Networks.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">Coinmarketcap Listing</div>
                  <div className="point-description">
                    Apply for listing on reputable cryptocurrency data platforms
                    like Coinmarketcap to increase visibility and credibility.{" "}
                    <br />
                    Provide the necessary information and documentation required
                    for the listing process.
                  </div>
                </div>
              </div>
              <div className="point">
                <div className="left">
                  <div className="point-name">Pre-IEO Private Round</div>
                  <div className="point-description">
                    Conduct a private funding round for early supporters and
                    investors. <br />
                    Offer exclusive benefits, such as early access, discounted
                    token prices, and special in-game rewards, to incentivize
                    participation.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {toggleValue === 2 ? (
          <>
            <div className="phase-no">GROWTH</div>
            <div className="line"></div>

            <div className="each-point" ref={eachtimelineRef}>
              <div className="point">
                <div className="left">
                  <div className="point-name">Website Redesign</div>
                  <div className="point-description">
                    Enhance the website's design and functionality based on user
                    feedback and market trends.
                    <br /> Implement improvements to improve user experience and
                    engagement.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">Develop DEX Infrastructure</div>
                  <div className="point-description">
                    Build and test the decentralized exchange (DEX)
                    infrastructure for token swapping and listing within the
                    game ecosystem.
                  </div>
                </div>
              </div>
              <div className="point">
                <div className="left">
                  <div className="point-name">DEX Beta Version</div>
                  <div className="point-description">
                    Release a beta version of the DEX to a select group of users
                    for testing and feedback
                    <br />
                    Gather user insights and make necessary improvements to
                    enhance the DEX's performance and user experience.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">50K Holders </div>
                  <div className="point-description">
                    Execute marketing campaigns to attract a significant number
                    of token holders and build a strong community around Loop of
                    Infinity. <br />
                    ngage with the community through social media channels,
                    forums, and live events to foster trust and loyalty.
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {toggleValue === 3 ? (
          <>
            <div className="phase-no">UTILITY</div>
            <div className="line"></div>

            <div className="each-point" ref={eachtimelineRef}>
              <div className="point">
                <div className="left">
                  <div className="point-name">
                    120K Holders and More CEX Listing
                  </div>
                  <div className="point-description">
                    Continue to expand the user base and attract more token
                    holders through ongoing marketing efforts and community
                    engagement.
                    <br /> Explore additional listings on reputable centralized
                    exchanges (CEX) to increase liquidity and accessibility for
                    investors and traders.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">Marketplace Launch</div>
                  <div className="point-description">
                    Develop and launch a marketplace within Loop of Infinity
                    where players can buy, sell, and trade in-game items,
                    characters, or assets using the Infinity Token.
                    <br />
                    Ensure the marketplace is user-friendly, secure, and
                    provides a seamless trading experience.
                  </div>
                </div>
              </div>
              <div className="point">
                <div className="left">
                  <div className="point-name">Platform Launch</div>
                  <div className="point-description">
                    Launch the full version of the Loop of Infinity platform,
                    including all the core gameplay features, quests,
                    challenges, and multiplayer functionality. Prioritize a
                    smooth and enjoyable user experience, ensuring that the
                    platform is stable, responsive, and bug-free.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
              <div className="point">
                <div className="left"></div>
                <div className="circle"></div>

                <div className="right">
                  <div className="point-name">Beta Version Launch</div>
                  <div className="point-description">
                    Release a beta version of the blockchain-based gameplay
                    features, such as tournaments, rewards, and achievements.
                    <br />
                    Invite a select group of users to test the features, gather
                    feedback, and identify any necessary improvements.
                  </div>
                </div>
              </div>
              <div className="point">
                <div className="left">
                  <div className="point-name">
                    Main-Net Launch and Hold First Tournament
                  </div>
                  <div className="point-description">
                    Launch the main-net version of the Loop of Infinity game,
                    ensuring a seamless transition from the beta phase. <br />
                    Offer exclusive benefits, such as early access, discounted
                    Organize and host the first official tournament to showcase
                    the competitive nature of the game and provide exciting
                    rewards to players.
                  </div>
                </div>
                <div className="circle"></div>

                <div className="right"></div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Timeline;
