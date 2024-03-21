// Code your solution in this file!

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(block) {
    const headquartersBlock = 42;
    return Math.abs(block - headquartersBlock);
}

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264; // Assuming each block is 264 feet long
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264; // Assuming each block is 264 feet long
}

// Function to calculate fare price
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance over 2000 feet
    } else {
        return 'cannot travel that far'; // Error message for rides over 2500 feet
    }
}
