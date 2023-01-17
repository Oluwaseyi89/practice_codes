package com.example.restaurantapp;

import android.app.Activity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.RadioGroup;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class LunchList extends Activity {
    List<Restaurant> model = new ArrayList<>();
    RestaurantAdapter adapter = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button save = findViewById(R.id.save);

        save.setOnClickListener(onSave);

        ListView list = findViewById(R.id.restaurants);

        adapter = new RestaurantAdapter();
        list.setAdapter(adapter);
    }

    private final View.OnClickListener onSave = v -> {
        Restaurant r = new Restaurant();
        EditText name = findViewById(R.id.name);
        EditText address = findViewById(R.id.addr);

        r.setName(name.getText().toString());
        r.setAddress(address.getText().toString());

        RadioGroup types = findViewById(R.id.types);

        switch (types.getCheckedRadioButtonId()) {
            case R.id.sit_down: r.setType("sit_down");
            break;
            case R.id.take_out: r.setType("take_out");
            break;
            case R.id.delivery: r.setType("delivery");
            break;
        }
        adapter.add(r);
    };
    class RestaurantAdapter extends ArrayAdapter<Restaurant> {
        RestaurantAdapter () {
            super(LunchList.this, R.layout.row, model);
        }

        public View getView (int position, View convertView, ViewGroup parent) {
            View row = convertView;
            RestaurantHolder holder;

            if (row == null) {
                LayoutInflater inflater = getLayoutInflater();

                row = inflater.inflate(R.layout.row, parent, false);
                holder = new RestaurantHolder(row);
                row.setTag(holder);
            } else {
                holder = (RestaurantHolder) row.getTag();
            }
            holder.populateFrom(model.get(position));

            return (row);
        }
    }
}



    class RestaurantHolder {
            private final TextView name;
            private final TextView address;
            private final ImageView icon;

            RestaurantHolder (View row) {
                name = row.findViewById(R.id.title);
                address = row.findViewById(R.id.address);
                icon = row.findViewById(R.id.icon);
            }

            void populateFrom (Restaurant r) {
                name.setText(r.getName());
                address.setText(r.getAddress());
                if (r.getType().equals("sit_down")) {
                    icon.setImageResource(R.drawable.sitdown_icon);
                }
                else if (r.getType().equals("take_out")) {
                    icon.setImageResource(R.drawable.takeaway_icon);
                } else {
                    icon.setImageResource((R.drawable.delivery_icon));
                }
            }
    }