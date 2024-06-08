// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer} className='bg-secondary'>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Company</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.text}>About Us</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Careers</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Contact</span>
            </li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Resources</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.text}>Blog</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Help Center</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Privacy Policy</span>
            </li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.text}>Twitter</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Facebook</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.text}>Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem',
  
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
  },
  column: {
    flex: 1,
    padding: '1rem',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  text: {
    color: '#fff',
  },
};

export default Footer;
