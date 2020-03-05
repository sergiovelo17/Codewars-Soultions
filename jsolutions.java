public class jsolutions
{
    public static String balancedNum(long number)
    {
        System.out.println(number);
        int left = 0;
        int right = 0;
        String s1 = "" + number;
        if(s1.length() == 0 || s1.length() == 1){
          return "Balanced";
        }
        if(s1.length() % 2 == 0){
        int mid2 = s1.length()/2;
        int mid1 = mid2-1;
        for(int i = 0; i < s1.length(); i++){
          if(i < mid1){
            left = left + ((int) s1.charAt(i)) - 48;
          }
          if(i > mid2){
            right = right + ((int) s1.charAt(i)) - 48;
          }
        }
        }else{
        int mid = (int) s1.length()/2;
          for(int i = 0; i < s1.length(); i++){
            if(i < mid){
              left = left + ((int) s1.charAt(i)) - 48;
            }
            if(i > mid){
            right = right + ((int) s1.charAt(i)) - 48;
            }
          }
        }
        if(right == left){
          return "Balanced";
        }
        return "Not Balanced";
        }
        public static String oddOrEven (int[] array) {
            int total = 0;
            for(int i = 0; i < array.length; i++){
              total += array[i];
            }
            if(total % 2 == 0){
              return "even";
            }
            return "odd";
          }
          public static boolean zeroFuel(double distanceToPump, double mpg, double fuelLeft) {
            while(fuelLeft > 0){
              distanceToPump -= mpg;
              if(distanceToPump <= 0){
                return true;
              }
              fuelLeft--;
            }
            return false;
        }
}
