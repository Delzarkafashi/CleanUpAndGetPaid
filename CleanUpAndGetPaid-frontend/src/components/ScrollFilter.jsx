import React from 'react';

const ScrollFilter = ({ categories, handleCategoryClick }) => {
    const scrollRight = () => {
        const container = document.querySelector('.scrollFilter');
        const buttonWidth = container.querySelector('button').offsetWidth + 20; // button width plus margin
        container.scrollLeft += buttonWidth; // Scroll by one button width
    };

    const scrollLeft = () => {
        const container = document.querySelector('.scrollFilter');
        const buttonWidth = container.querySelector('button').offsetWidth + 20; // button width plus margin
        container.scrollLeft -= buttonWidth; // Scroll by one button width
    };

    return (
        <div style={styles.scrollFilterWrapper}>
            <div style={styles.scrollFilterContainer}>
                <button style={styles.scrollButton} onClick={scrollLeft}>
                    &lt;
                </button>
                <div style={styles.scrollFilter} className="scrollFilter">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            style={{
                                ...styles.keywordButton,
                                marginLeft: index === 0 ? '50px' : '10px',
                                marginRight: index === categories.length - 1 ? '50px' : '10px',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.keywordButtonHover.backgroundColor)}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.keywordButton.backgroundColor)}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button style={styles.scrollButton} onClick={scrollRight}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

const styles = {
    scrollFilterWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0',
        marginBottom: '30px',
        position: 'relative',
        zIndex: 10,
        flexDirection: 'column',
    },
    scrollFilterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1350px',
        position: 'relative',
        padding: '0 50px',
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    scrollFilter: {
        display: 'flex',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        padding: '10px 0',
        scrollBehavior: 'smooth',
        scrollbarWidth: 'none',
        paddingLeft: '50px',
        paddingRight: '50px',
        boxSizing: 'border-box',
        scrollSnapType: 'x mandatory',
    },
    keywordButton: {
        backgroundColor: 'bisque',
        color: 'black',
        border: 'none',
        padding: '12px 18px',
        margin: '0 10px',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
        fontSize: '14px',
        minWidth: '120px',
        maxWidth: '120px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        scrollSnapAlign: 'center',
    },
    scrollButton: {
        backgroundColor: 'bisque',
        color: 'black',
        border: 'none',
        padding: '12px 18px',
        margin: '0 10px',
        cursor: 'pointer',
        fontSize: '20px',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
        zIndex: 1,
    },
    keywordButtonHover: {
        backgroundColor: '#e3b191',
    },
};

export default ScrollFilter;
