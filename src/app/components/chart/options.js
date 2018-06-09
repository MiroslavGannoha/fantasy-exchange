import Color from 'color'

const chartColors = {
    red: Color('rgba(255, 146, 139, 0.8)'),
    green: Color('rgba(87, 228, 198, 0.8)'),
    blue: Color('rgba(60, 145, 218, 0.7)')
}

let colors = Object.assign({}, chartColors,
    {
        array() {
            return Object.keys(chartColors).map(color => chartColors[color].string())
        }
    }
)

const defaults = {
    maintainAspectRatio: false,
    elements: {
        arc: {
            borderWidth: 3
        }
    },
    tooltips: {
        backgroundColor: 'rgb(120, 120, 120)',
        cornerRadius: 3,
    }
}

export { colors, defaults }
