import React, { Component } from 'react';
import { FaMusic, FaHiking, FaShuttleVan, FaDumbbell } from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaMusic />,
        title: 'Live Music',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        icon: <FaDumbbell />,
        title: 'Fitness Center',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
