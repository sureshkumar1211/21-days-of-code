const naiveString = (str, match) =>
{
    let counter = 0;
    for (let i = 0; i < str.length; i++)
    {
        let findStr = [];
        for (let j = 0; j < match.length; j++)
        {
            if (str[i + j] === match[j])
            {
                findStr.push(str[i + j]);
                findStr.join("") === match ? counter += 1 : counter;
            } else
            {
                break;
            }
        }
    }
    return counter;
};

console.log(naiveString("shopkeepershop", "shop"));