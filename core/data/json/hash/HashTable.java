package json.hash;

public class HashTable {
    Linkedlist[] hash;

    public HashTable(int size) {
        this.hash = new Linkedlist[size];
    }

    public void add(String editor, String title) {
        int index = this.key(editor);
        if (hash[index] == null)
            hash[index] = new Linkedlist();
        hash[index].add(editor, title);
    }

    public void display() {
        for (int a = 0; a < hash.length; a++)
            this.display(a);
    }

    public void display(int index) {
        if (this.hash[index] != null) {
            this.hash[index].display(0);
            if (index < 24)
                System.out.print(",");
        }
    }

    private int key(String editor) {
        char first = editor.toLowerCase().charAt(0);
        int index = first - 97;
        return index;
    }

    public void searchKey(String editor) {
        int index = this.key(editor);
        this.hash[index].containSearch(editor.toLowerCase());
    }
}
