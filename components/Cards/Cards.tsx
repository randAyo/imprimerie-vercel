import React, { useState } from 'react'
import classes from './Cards.module.scss'
import details from '../../utils/sample-data'
import { SvgHolder } from '../svg/SvgHolder';
import { Card } from '../Card/Card'
import useWindowDimensions from '../../hoc/useWindow';
const { cards, carda, colCard, indicatorContainer, indicatorItem, rightCardBtn, leftCardBtn } = classes;

export const Cards: React.FC = ({ }) => {
  if (process.browser) {
    var { width } = useWindowDimensions();

  }
  const [isHovred, setisHovred] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const onNext = () => {
    if (isHovred) {
      return
    }
    else if (index < details.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  const onPrev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(details.length - 1)
    }
  }
  let multiplier: number;
  if (width > 0) {
    multiplier = -(100 * index);
  } else if (width > 600) {
    multiplier = (60 - 100 * index);
  } else if (width > 960) {
    multiplier = (90 - 100 * index);
  } else if (width > 1280) {
    multiplier = (120 - 100 * index);
  } else if (width > 1920) {
    multiplier = (140 * index);
  }
  const mappedCards = details.map(ex => {
    return <div
      onMouseEnter={() => setisHovred(true)}
      onMouseLeave={() => setisHovred(false)}
      style={{ transform: `translateX(${multiplier}%)` }} className={index === ex.id ? `${colCard} card-active-${index}s` : colCard} key={ex.id}  >
      <Card
        // @ts-ignore
        cardId={ex.id}
        title={ex.name}
        src={ex.src}
        content={ex.content.description}
        setIndex={setIndex}
      />
    </div>
  })
  return (
    <>
      <button onClick={onPrev} className={leftCardBtn}>
        <SvgHolder
          fill={classes.orange}
          width="100%"
          height="100%"
          viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
        </SvgHolder>
      </button>
      <button onClick={onNext} className={rightCardBtn}>
        <SvgHolder
          fill={classes.orange}
          width="100%"
          height="100%"
          viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </SvgHolder>
      </button>
      <div className={cards}>
        <div className={carda}>{mappedCards}</div>
        <div className={indicatorContainer}>
          {details.map(ex => <div
            onClick={() => setIndex(ex.id)}
            key={ex.id}
            className={index === ex.id ? `${indicatorItem} indicator-item-active-${index}s` : indicatorItem}
          ></div>)}
        </div>
      </div>
    </>
  );
}