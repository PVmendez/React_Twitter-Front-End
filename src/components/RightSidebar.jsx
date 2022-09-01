import React from "react";
import styles from "./RightSidebar.module.css"

export const RightSidebar = () => {
  return (
        <div className={`${styles.trendsforyou}`}>
          <div className={`${styles.trendsforyou}`}>
            <div className={`${styles.trendsforyoublock}`}>
              <div className={`${styles.trendsforyouheading}`}>
                Trends for you
              </div>
            </div>
            <div className={`${styles.trendsforyoublock}`}>
              <div className={`${styles.trendsforyoumetainformation}`}>
                Trending in Germany
              </div>
              <div className={`${styles.trendsforyoutrendname}`}>
                #iPhone12
              </div>
              <div className={`${styles.trendsforyoumetainformation}`}>
                155k Tweets
              </div>
            </div>
            <div className={`${styles.trendsforyoublock}`}>
              <div className={`${styles.trendsforyoumetainformation}`}>
                Trending in Germany
              </div>
              <div className={`${styles.trendsforyoutrendname}`}>
                #AmazonPrimeDay
              </div>
            </div>
            <div className={`${styles.trendsforyoublock}`}>
              <div className={`${styles.trendsforyoumetainformation}`}>
                Trending  Trending
              </div>
              <div className={`${styles.trendsforyoutrendname}`}>
                #autos
              </div>
              <div className={`${styles.trendsforyoumetainformation}`}>
                2,800 Tweets
              </div>
            </div>
          </div>
          <div className={`${styles.whotofollow}`}>
            <div className={`${styles.whotofollowblock}`}>
              <div className={`${styles.whotofollowheading}`}>
                Who to follow
              </div>
            </div>
            <div className={`${styles.whotofollowblock}`}>
              <img
                className={`${styles.whotofollowlogo}`}
                src=""
                alt=""
              />
              <div className={`${styles.whotofollowcontent}`}>
                <div>
                  <div className={`${styles.whotofollowname}`}>
                    Pablo Méndez
                  </div>
                  <div className={`${styles.whotofollowauthorslug}`}>
                    @pmendez
                  </div>
                </div>
                <div className={`${styles.whotofollowbutton}`}>
                  Follow
                </div>
              </div>
            </div>
            <div className={`${styles.whotofollowblock}`}>
              <img
                className={`${styles.whotofollowlogo}`}
                src=""
                alt=""
              />
              <div className={`${styles.whotofollowcontent}`}>
                <div>
                  <div className={`${styles.whotofollowname}`}>
                    Manuel Perera
                  </div>
                  <div className={`${styles.whotofollowauthorslug}`}>
                    @mperera
                  </div>
                </div>
                <div className={`${styles.whotofollowbutton}`}>
                  Follow
                </div>
              </div>
            </div>

            <div className={`${styles.whotofollowblock}`}>
              <img
                className={`${styles.whotofollowlogo}`}
                src=""
                alt=""
              />
              <div className={`${styles.whotofollowcontent}`}>
                <div>
                  <div className={`${styles.whotofollowname}`}>
                    Guillermo Galain
                  </div>
                  <div className={`${styles.whotofollowauthorslug}`}>
                    @ggalain
                  </div>
                </div>
                <div className={`${styles.whotofollowbutton}`}>
                  Follow
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}