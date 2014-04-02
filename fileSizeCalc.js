function calculateFileSize(fileSizeInBytes) {
     //Start with an invalid Index, so we have something to pass back if something is wrong.
     var index = -1;
     //The array listing all the orders of file sizes, in order.
     //Note: Calculated values are in the base 2, therefore the proper wording is KiB, MiB, etc.
     //KB, MB, GB are used when referring to the base 10, which Storage Manufacturers use.  
     var sizes = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
     //Initalize a temporary variable to hold our calculated values
     var tmpFileSizeInBytes = fileSizeInBytes;
     //If the file size is less than the needed threshold to get up to even Kilibytes, we know
     //The file is only bytes large, and so we use the first index to describe the size.
     if (fileSizeInBytes < 1024) {
          index = 0;
     }
     //While our file size exceeds 1024, meaning it can go to the next file size
     while (tmpFileSizeInBytes > 1024) {
          index++;
          //We calculate the new Integer to represent the file size threshold. 
          //For example, 2^10 is needed to get from Bytes to Kilibytes,
          //2^20 is the number of bytes in a Mebibyte, etc.
          bytesInSize = Math.pow(2,(10*index));
          //Taking the number of bytes passed to us, we divide it by the number
          //Of bytes at our present threshold, and put that into a new variable. 
          tmpFileSizeInBytes = fileSizeInBytes/bytesInSize;         
     }
     //Return the file size we've calculated the number to be, and the file size descriptor.
     //It's presently determined down to 2 decimal places, as that's the Windows Standard.
     return tmpFileSizeInBytes.toFixed(2) + sizes[index];
}