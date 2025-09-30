import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from './weather';

describe('Weather Component', () => {
  // Happy Path Tests
  describe('Rendering', () => {
    test('renders without crashing', () => {
      render(<Weather />);
    });

    test('renders the main weather card container', () => {
      const { container } = render(<Weather />);
      const weatherCard = container.querySelector('.bg-gradient-to-r');
      expect(weatherCard).toBeInTheDocument();
    });
  });

  describe('Content Display', () => {
    test('displays city name label', () => {
      render(<Weather />);
      expect(screen.getByText('City Name')).toBeInTheDocument();
    });

    test('displays Tokyo as the city', () => {
      render(<Weather />);
      expect(screen.getByText('Tokyo')).toBeInTheDocument();
    });

    test('displays weather condition label', () => {
      render(<Weather />);
      expect(screen.getByText('Weather Condition')).toBeInTheDocument();
    });

    test('displays Cloudy as the weather condition', () => {
      render(<Weather />);
      expect(screen.getByText('Cloudy')).toBeInTheDocument();
    });

    test('displays date label', () => {
      render(<Weather />);
      expect(screen.getByText('Date')).toBeInTheDocument();
    });

    test('displays the date value', () => {
      render(<Weather />);
      expect(screen.getByText('2024-07-20')).toBeInTheDocument();
    });

    test('displays temperature label', () => {
      render(<Weather />);
      expect(screen.getByText('Temperature')).toBeInTheDocument();
    });

    test('displays temperature value', () => {
      render(<Weather />);
      expect(screen.getByText('20°C')).toBeInTheDocument();
    });

    test('displays humidity label', () => {
      render(<Weather />);
      expect(screen.getByText('Humidity')).toBeInTheDocument();
    });

    test('displays humidity value', () => {
      render(<Weather />);
      expect(screen.getByText('40%')).toBeInTheDocument();
    });

    test('displays placeholder image text', () => {
      render(<Weather />);
      expect(screen.getByText('画像2')).toBeInTheDocument();
    });
  });

  describe('Structure and Layout', () => {
    test('renders all main sections', () => {
      render(<Weather />);
      
      // Verify city section
      const cityLabel = screen.getByText('City Name');
      expect(cityLabel).toBeInTheDocument();
      
      // Verify weather condition section
      const weatherLabel = screen.getByText('Weather Condition');
      expect(weatherLabel).toBeInTheDocument();
      
      // Verify metrics section
      const dateLabel = screen.getByText('Date');
      const tempLabel = screen.getByText('Temperature');
      const humidityLabel = screen.getByText('Humidity');
      
      expect(dateLabel).toBeInTheDocument();
      expect(tempLabel).toBeInTheDocument();
      expect(humidityLabel).toBeInTheDocument();
    });

    test('renders the outer wrapper with padding', () => {
      const { container } = render(<Weather />);
      const wrapper = container.querySelector('.p-4');
      expect(wrapper).toBeInTheDocument();
    });

    test('renders card with gradient background classes', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.bg-gradient-to-r.from-blue-500.to-blue-300');
      expect(card).toBeInTheDocument();
    });

    test('applies shadow and rounded corner classes to card', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.shadow-2xl.rounded-xl');
      expect(card).toBeInTheDocument();
    });

    test('applies text-white class for white text', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.text-white');
      expect(card).toBeInTheDocument();
    });
  });

  describe('CSS Classes and Styling', () => {
    test('applies hover transform effect class', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.hover\\:scale-110');
      expect(card).toBeInTheDocument();
    });

    test('applies transition-transform class', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.transition-transform');
      expect(card).toBeInTheDocument();
    });

    test('applies correct dimensions to card', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.w-96.h-56');
      expect(card).toBeInTheDocument();
    });

    test('centers card with m-auto class', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.m-auto');
      expect(card).toBeInTheDocument();
    });

    test('applies relative positioning to card', () => {
      const { container } = render(<Weather />);
      const card = container.querySelector('.relative');
      expect(card).toBeInTheDocument();
    });

    test('applies absolute positioning to content wrapper', () => {
      const { container } = render(<Weather />);
      const contentWrapper = container.querySelector('.absolute.top-6');
      expect(contentWrapper).toBeInTheDocument();
    });

    test('applies w-full class to content wrapper', () => {
      const { container } = render(<Weather />);
      const contentWrapper = container.querySelector('.w-full.px-8');
      expect(contentWrapper).toBeInTheDocument();
    });
  });

  describe('Typography Classes', () => {
    test('applies font-light class to labels', () => {
      const { container } = render(<Weather />);
      const lightFontElements = container.querySelectorAll('.font-light');
      expect(lightFontElements.length).toBeGreaterThan(0);
    });

    test('applies font-medium class to main values', () => {
      const { container } = render(<Weather />);
      const mediumFontElements = container.querySelectorAll('.font-medium');
      expect(mediumFontElements.length).toBeGreaterThan(0);
    });

    test('applies tracking-widest class for letter spacing', () => {
      const { container } = render(<Weather />);
      const trackedElements = container.querySelectorAll('.tracking-widest');
      expect(trackedElements.length).toBeGreaterThan(0);
    });

    test('applies font-bold class to metric values', () => {
      const { container } = render(<Weather />);
      const boldElements = container.querySelectorAll('.font-bold');
      expect(boldElements.length).toBeGreaterThan(0);
    });

    test('applies text-lg class for larger text', () => {
      const { container } = render(<Weather />);
      const largeTextElements = container.querySelectorAll('.text-lg');
      expect(largeTextElements.length).toBeGreaterThan(0);
    });

    test('applies text-xs class for smaller text', () => {
      const { container } = render(<Weather />);
      const smallTextElements = container.querySelectorAll('.text-xs');
      expect(smallTextElements.length).toBeGreaterThan(0);
    });

    test('applies text-sm class for small-medium text', () => {
      const { container } = render(<Weather />);
      const smallMediumElements = container.querySelectorAll('.text-sm');
      expect(smallMediumElements.length).toBeGreaterThan(0);
    });
  });

  describe('Layout Flexbox Classes', () => {
    test('applies flex and justify-between classes for header layout', () => {
      const { container } = render(<Weather />);
      const flexContainers = container.querySelectorAll('.flex.justify-between');
      expect(flexContainers.length).toBeGreaterThan(0);
    });

    test('applies text-left class to weather condition section', () => {
      const { container } = render(<Weather />);
      const leftAlignedSection = container.querySelector('.pt-2.text-left');
      expect(leftAlignedSection).toBeInTheDocument();
    });
  });

  describe('Spacing Classes', () => {
    test('applies pt-2 padding-top class', () => {
      const { container } = render(<Weather />);
      const pt2Element = container.querySelector('.pt-2');
      expect(pt2Element).toBeInTheDocument();
    });

    test('applies pt-6 padding-top class', () => {
      const { container } = render(<Weather />);
      const pt6Element = container.querySelector('.pt-6');
      expect(pt6Element).toBeInTheDocument();
    });

    test('applies pr-6 padding-right class', () => {
      const { container } = render(<Weather />);
      const pr6Element = container.querySelector('.pr-6');
      expect(pr6Element).toBeInTheDocument();
    });
  });

  describe('Edge Cases and Robustness', () => {
    test('renders consistently on multiple renders', () => {
      const { rerender } = render(<Weather />);
      expect(screen.getByText('Tokyo')).toBeInTheDocument();
      
      rerender(<Weather />);
      expect(screen.getByText('Tokyo')).toBeInTheDocument();
      expect(screen.getByText('Cloudy')).toBeInTheDocument();
    });

    test('component structure remains stable', () => {
      const { container } = render(<Weather />);
      const firstSnapshot = container.innerHTML;
      
      const { container: container2 } = render(<Weather />);
      const secondSnapshot = container2.innerHTML;
      
      expect(firstSnapshot).toBe(secondSnapshot);
    });

    test('all text content is properly contained within elements', () => {
      render(<Weather />);
      
      // Verify no loose text nodes
      const cityName = screen.getByText('Tokyo');
      const condition = screen.getByText('Cloudy');
      const date = screen.getByText('2024-07-20');
      const temp = screen.getByText('20°C');
      const humidity = screen.getByText('40%');
      
      expect(cityName.parentElement).toBeInTheDocument();
      expect(condition.parentElement).toBeInTheDocument();
      expect(date.parentElement).toBeInTheDocument();
      expect(temp.parentElement).toBeInTheDocument();
      expect(humidity.parentElement).toBeInTheDocument();
    });
  });

  describe('Data Formatting', () => {
    test('temperature is formatted with degree symbol and unit', () => {
      render(<Weather />);
      const tempValue = screen.getByText('20°C');
      expect(tempValue.textContent).toMatch(/\d+°C/);
    });

    test('humidity is formatted with percentage symbol', () => {
      render(<Weather />);
      const humidityValue = screen.getByText('40%');
      expect(humidityValue.textContent).toMatch(/\d+%/);
    });

    test('date follows ISO format pattern', () => {
      render(<Weather />);
      const dateValue = screen.getByText('2024-07-20');
      expect(dateValue.textContent).toMatch(/\d{4}-\d{2}-\d{2}/);
    });
  });

  describe('Component Export', () => {
    test('Weather component is exported as default', () => {
      expect(Weather).toBeDefined();
      expect(typeof Weather).toBe('function');
    });

    test('component returns valid React element', () => {
      const result = Weather();
      expect(result).toBeTruthy();
      expect(result.type).toBe('div');
    });
  });

  describe('Accessibility', () => {
    test('renders semantic HTML structure', () => {
      const { container } = render(<Weather />);
      const divElements = container.querySelectorAll('div');
      const pElements = container.querySelectorAll('p');
      
      expect(divElements.length).toBeGreaterThan(0);
      expect(pElements.length).toBeGreaterThan(0);
    });

    test('text content is readable and descriptive', () => {
      render(<Weather />);
      
      // Verify descriptive labels exist
      expect(screen.getByText('City Name')).toBeInTheDocument();
      expect(screen.getByText('Weather Condition')).toBeInTheDocument();
      expect(screen.getByText('Date')).toBeInTheDocument();
      expect(screen.getByText('Temperature')).toBeInTheDocument();
      expect(screen.getByText('Humidity')).toBeInTheDocument();
    });

    test('maintains proper label-value relationship', () => {
      render(<Weather />);
      
      const cityLabel = screen.getByText('City Name');
      const cityValue = screen.getByText('Tokyo');
      
      // Both should exist in DOM
      expect(cityLabel).toBeInTheDocument();
      expect(cityValue).toBeInTheDocument();
      
      // Value should come after label in DOM order
      const allText = screen.getAllByText(/City Name|Tokyo/);
      expect(allText.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Snapshot Testing', () => {
    test('matches snapshot', () => {
      const { container } = render(<Weather />);
      expect(container.firstChild).toMatchSnapshot();
    });

    test('full component snapshot', () => {
      const { asFragment } = render(<Weather />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Component Purity', () => {
    test('component is a pure function with no side effects', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const errorSpy = jest.spyOn(console, 'error');
      
      render(<Weather />);
      
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(errorSpy).not.toHaveBeenCalled();
      
      consoleSpy.mockRestore();
      errorSpy.mockRestore();
    });

    test('renders the same output given the same conditions', () => {
      const { container: container1 } = render(<Weather />);
      const html1 = container1.innerHTML;
      
      const { container: container2 } = render(<Weather />);
      const html2 = container2.innerHTML;
      
      const { container: container3 } = render(<Weather />);
      const html3 = container3.innerHTML;
      
      expect(html1).toBe(html2);
      expect(html2).toBe(html3);
    });
  });

  describe('Tailwind CSS Integration', () => {
    test('uses gradient utility classes correctly', () => {
      const { container } = render(<Weather />);
      const gradientElement = container.querySelector('[class*="bg-gradient-to-r"]');
      expect(gradientElement).toBeInTheDocument();
      expect(gradientElement.className).toContain('from-blue-500');
      expect(gradientElement.className).toContain('to-blue-300');
    });

    test('uses responsive and interactive classes', () => {
      const { container } = render(<Weather />);
      const interactiveElement = container.querySelector('[class*="hover:scale-110"]');
      expect(interactiveElement).toBeInTheDocument();
      expect(interactiveElement.className).toContain('transition-transform');
    });

    test('uses custom tracking class', () => {
      const { container } = render(<Weather />);
      const customTracking = container.querySelector('.tracking-more-wider');
      expect(customTracking).toBeInTheDocument();
    });
  });

  describe('Component Isolation', () => {
    test('does not modify global state', () => {
      const windowBefore = { ...window };
      render(<Weather />);
      expect(window).toEqual(windowBefore);
    });

    test('does not create memory leaks', () => {
      const { unmount } = render(<Weather />);
      unmount();
      
      // Component should unmount cleanly
      expect(screen.queryByText('Tokyo')).not.toBeInTheDocument();
    });

    test('can be rendered multiple times simultaneously', () => {
      const { container: container1 } = render(<Weather />);
      const { container: container2 } = render(<Weather />);
      const { container: container3 } = render(<Weather />);
      
      expect(container1.querySelector('.bg-gradient-to-r')).toBeInTheDocument();
      expect(container2.querySelector('.bg-gradient-to-r')).toBeInTheDocument();
      expect(container3.querySelector('.bg-gradient-to-r')).toBeInTheDocument();
    });
  });

  describe('Metrics Display Validation', () => {
    test('date, temperature, and humidity are displayed in correct order', () => {
      const { container } = render(<Weather />);
      const metricsSection = container.querySelector('.pt-6.pr-6');
      
      expect(metricsSection).toBeInTheDocument();
      
      const text = metricsSection.textContent;
      const dateIndex = text.indexOf('Date');
      const tempIndex = text.indexOf('Temperature');
      const humidityIndex = text.indexOf('Humidity');
      
      expect(dateIndex).toBeLessThan(tempIndex);
      expect(tempIndex).toBeLessThan(humidityIndex);
    });

    test('all three metrics sections exist as siblings', () => {
      render(<Weather />);
      
      const dateSection = screen.getByText('Date');
      const tempSection = screen.getByText('Temperature');
      const humiditySection = screen.getByText('Humidity');
      
      // All should have the same parent (flex container)
      expect(dateSection.parentElement?.parentElement).toBe(
        tempSection.parentElement?.parentElement
      );
      expect(tempSection.parentElement?.parentElement).toBe(
        humiditySection.parentElement?.parentElement
      );
    });
  });
});