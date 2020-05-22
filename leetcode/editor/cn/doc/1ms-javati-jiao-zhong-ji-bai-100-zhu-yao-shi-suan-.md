    public int maxNumberOfBalloons(String text) {
        int[] letters = new int[26];
        for(char ch :text.toCharArray()){
            letters[ch - 97] ++;
        }
        letters['l' - 97] /= 2;
        letters['o' - 97] /= 2;
        int min = Integer.MAX_VALUE;
        for(char ch : "balon".toCharArray()){
            if(letters[ch - 97] < min){
                min = letters[ch - 97];
            }
        }
        return min;
    }