const {FormatData} = require("./format-data");

module.exports.Filter = (haystack, needle) => {
    let findValue = (data, string) => {
        let foundObject = [];

        // Match groups with needle, filter out null results
        data.map((value, key) => {
            foundObject.push({
                id: value.id,
                name: value.name,
                image: value.image.link,
                url: value.url,
                groups: value.groups.map((index, key) => {
                    if (FormatData(index.name).indexOf(string) !== -1) {
                        return {
                            name: index.name,
                            url: index.url
                        };
                    }
                }).filter(val => val != null)
            });
        });

        // Include project results that match the needle
        return foundObject.filter(val =>
            FormatData(val.name).indexOf(string) !== -1
            || val.groups.length != 0);
    };

    return findValue(haystack, needle);
}
