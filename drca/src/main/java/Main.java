/**
 * Created by rubenspessoa on 11/10/16.
 */

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.Block;
import com.mongodb.client.FindIterable;
import org.bson.Document;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Locale;

import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Sorts.ascending;
import static java.util.Arrays.asList;

public class Main {

    public static void main(String[] args) {
        MongoClient mongoClient = new MongoClient();
        MongoDatabase db = mongoClient.getDatabase("test");

        FindIterable<Document> iterable = db.getCollection("restaurants").find(
                eq("address.zipcode", "10075"));

        iterable.forEach(new Block<Document>() {
            public void apply(Document document) {
                System.out.println(document);
            }
        });
    }

}
