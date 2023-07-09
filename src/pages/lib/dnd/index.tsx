import React, { useState, useCallback, useRef } from 'react';
import { DndProvider, } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './Card'

function Dnd() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])
  const cardsRef = useRef(cards)

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const _cards = [...cardsRef.current]
    const oldCard = _cards[dragIndex]
    _cards[dragIndex] = _cards[hoverIndex]
    _cards[hoverIndex] = oldCard
    cardsRef.current = _cards
    setCards(_cards)
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {
          cards.map((card, index) => {
            return (
              <Card
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                moveCard={moveCard}
              />
            )
          })
        }
      </div>
    </DndProvider>
  );
}

export default Dnd;
