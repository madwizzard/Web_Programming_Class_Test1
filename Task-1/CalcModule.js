module.exports = {
    CalcDist: function (Eco, Tank) {
        // Calculating the distance using the fuel economy and fuel in the tank
        const Dist = (Tank / Eco) * 100;;
        return Dist;
    },
};
