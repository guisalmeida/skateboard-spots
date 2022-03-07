import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('Should render without any marker.', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with the marker in correct place.', () => {
    const place = {
      id: '1',
      name: 'Floripa',
      slug: 'floripa',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const place2 = {
      id: '2',
      name: 'Canoas',
      slug: 'canoas',
      location: {
        latitude: 1,
        longitude: 1
      }
    }

    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/floripa/i)).toBeInTheDocument()
    expect(screen.getByTitle(/canoas/i)).toBeInTheDocument()
  })
})
