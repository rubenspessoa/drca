package server;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import java.util.Comparator;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class RegressionTest1 {

  public static boolean debug = false;

  @Test
  public void test1() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test1"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array3 = new java.lang.Boolean[] { true, true };
    boolean b4 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array3);
    treeset_b0.clear();
    java.lang.Boolean b7 = treeset_b0.lower((java.lang.Boolean)true);
    java.lang.Boolean b8 = treeset_b0.pollLast();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b11 = treeset_b0.headSet((java.lang.Boolean)true, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b12 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array15 = new java.lang.Boolean[] { true, true };
    boolean b16 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12, b_array15);
    treeset_b12.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b20 = treeset_b12.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b22 = treeset_b12.add((java.lang.Boolean)true);
    java.util.ArrayList<java.lang.Object[]> arraylist_obj_array23 = new java.util.ArrayList<java.lang.Object[]>();
    java.lang.Object[][] obj_array_array24 = new java.lang.Object[][] {  };
    boolean b25 = java.util.Collections.addAll((java.util.Collection<java.lang.Object[]>)arraylist_obj_array23, obj_array_array24);
    boolean b26 = treeset_b12.containsAll((java.util.Collection<java.lang.Object[]>)arraylist_obj_array23);
    boolean b27 = treeset_b0.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12);
    java.lang.Boolean b28 = treeset_b12.first();
    java.util.Iterator<java.lang.Boolean> iterator_b29 = treeset_b12.descendingIterator();
    java.util.TreeSet<java.lang.Boolean> treeset_b30 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array33 = new java.lang.Boolean[] { true, true };
    boolean b34 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b30, b_array33);
    treeset_b30.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b38 = treeset_b30.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b40 = treeset_b30.add((java.lang.Boolean)true);
    java.util.SortedSet<java.lang.Boolean> sortedset_b43 = treeset_b30.subSet((java.lang.Boolean)false, (java.lang.Boolean)false);
    java.util.Iterator<java.lang.Boolean> iterator_b44 = treeset_b30.iterator();
    boolean b45 = treeset_b12.addAll((java.util.Collection<java.lang.Boolean>)treeset_b30);
    int i46 = treeset_b30.size();
    java.util.TreeSet<java.lang.Boolean> treeset_b47 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array50 = new java.lang.Boolean[] { true, true };
    boolean b51 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b47, b_array50);
    treeset_b47.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b55 = treeset_b47.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b57 = treeset_b47.add((java.lang.Boolean)true);
    java.util.TreeSet<java.lang.Boolean> treeset_b58 = new java.util.TreeSet<java.lang.Boolean>((java.util.SortedSet<java.lang.Boolean>)treeset_b47);
    java.util.Iterator<java.lang.Boolean> iterator_b59 = treeset_b58.descendingIterator();
    java.lang.Boolean b61 = treeset_b58.lower((java.lang.Boolean)true);
    java.lang.Object[] obj_array62 = treeset_b58.toArray();
    boolean b63 = treeset_b30.equals((java.lang.Object)treeset_b58);
    java.util.TreeSet<java.lang.Boolean> treeset_b64 = new java.util.TreeSet<java.lang.Boolean>((java.util.SortedSet<java.lang.Boolean>)treeset_b30);
    treeset_b30.clear();
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array3);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b4 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b7);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b11);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array15);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b16 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b20);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b22 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array_array24);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b25 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b26 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b27 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue("'" + b28 + "' != '" + true+ "'", b28.equals(true));
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b29);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array33);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b34 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b38);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b40 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b43);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b44);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b45 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(i46 == 1);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array50);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b51 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b55);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b57 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b59);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b61);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array62);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b63 == true);

  }

  @Test
  public void test2() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test2"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array3 = new java.lang.Boolean[] { true, true };
    boolean b4 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array3);
    treeset_b0.clear();
    java.lang.Boolean b7 = treeset_b0.lower((java.lang.Boolean)true);
    java.lang.Boolean b8 = treeset_b0.pollLast();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b11 = treeset_b0.headSet((java.lang.Boolean)true, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b12 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array15 = new java.lang.Boolean[] { true, true };
    boolean b16 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12, b_array15);
    treeset_b12.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b20 = treeset_b12.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b22 = treeset_b12.add((java.lang.Boolean)true);
    java.util.ArrayList<java.lang.Object[]> arraylist_obj_array23 = new java.util.ArrayList<java.lang.Object[]>();
    java.lang.Object[][] obj_array_array24 = new java.lang.Object[][] {  };
    boolean b25 = java.util.Collections.addAll((java.util.Collection<java.lang.Object[]>)arraylist_obj_array23, obj_array_array24);
    boolean b26 = treeset_b12.containsAll((java.util.Collection<java.lang.Object[]>)arraylist_obj_array23);
    boolean b27 = treeset_b0.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12);
    java.lang.Boolean b28 = treeset_b12.first();
    java.lang.Boolean b30 = treeset_b12.higher((java.lang.Boolean)false);
    java.util.TreeSet<java.lang.Boolean> treeset_b31 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array34 = new java.lang.Boolean[] { true, true };
    boolean b35 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b31, b_array34);
    treeset_b31.clear();
    java.lang.Boolean b38 = treeset_b31.lower((java.lang.Boolean)true);
    java.lang.Boolean b39 = treeset_b31.pollLast();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b42 = treeset_b31.headSet((java.lang.Boolean)true, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b43 = new java.util.TreeSet<java.lang.Boolean>((java.util.Collection<java.lang.Boolean>)navigableset_b42);
    java.util.ArrayList<java.lang.String> arraylist_str44 = new java.util.ArrayList<java.lang.String>();
    java.lang.String[] str_array49 = new java.lang.String[] { "[false]", "", "[false]", "[]" };
    boolean b50 = java.util.Collections.addAll((java.util.Collection<java.lang.String>)arraylist_str44, str_array49);
    boolean b51 = treeset_b43.retainAll((java.util.Collection<java.lang.String>)arraylist_str44);
    boolean b52 = treeset_b12.retainAll((java.util.Collection<java.lang.String>)arraylist_str44);
    java.util.NavigableSet<java.lang.Boolean> navigableset_b53 = treeset_b12.descendingSet();
    int i54 = treeset_b12.size();
    java.lang.Boolean b55 = treeset_b12.pollLast();
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array3);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b4 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b7);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b11);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array15);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b16 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b20);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b22 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array_array24);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b25 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b26 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b27 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue("'" + b28 + "' != '" + true+ "'", b28.equals(true));
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue("'" + b30 + "' != '" + true+ "'", b30.equals(true));
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array34);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b35 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b38);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b39);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b42);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(str_array49);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b50 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b51 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b52 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b53);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(i54 == 0);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b55);

  }

  @Test
  public void test3() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test3"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array3 = new java.lang.Boolean[] { true, true };
    boolean b4 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array3);
    treeset_b0.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b8 = treeset_b0.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b10 = treeset_b0.add((java.lang.Boolean)true);
    boolean b12 = treeset_b0.add((java.lang.Boolean)true);
    boolean b14 = treeset_b0.add((java.lang.Boolean)true);
    java.util.SortedSet<java.lang.Boolean> sortedset_b16 = treeset_b0.headSet((java.lang.Boolean)true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array3);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b4 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b10 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b12 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b14 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b16);

  }

  @Test
  public void test4() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test4"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array2 = new java.lang.Boolean[] { false };
    boolean b3 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array2);
    java.util.NavigableSet<java.lang.Boolean> navigableset_b6 = treeset_b0.headSet((java.lang.Boolean)false, true);
    java.util.TreeSet<java.lang.Boolean> treeset_b7 = new java.util.TreeSet<java.lang.Boolean>((java.util.SortedSet<java.lang.Boolean>)navigableset_b6);
    java.util.NavigableSet<java.lang.Boolean> navigableset_b10 = treeset_b7.tailSet((java.lang.Boolean)true, false);
    java.util.Iterator<java.lang.Boolean> iterator_b11 = treeset_b7.descendingIterator();
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array2);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b3 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b6);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b10);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b11);

  }

  @Test
  public void test5() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test5"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array3 = new java.lang.Boolean[] { true, true };
    boolean b4 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array3);
    treeset_b0.clear();
    java.lang.Boolean b7 = treeset_b0.lower((java.lang.Boolean)true);
    java.lang.Boolean b8 = treeset_b0.pollLast();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b11 = treeset_b0.headSet((java.lang.Boolean)true, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b12 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array15 = new java.lang.Boolean[] { true, true };
    boolean b16 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12, b_array15);
    treeset_b12.clear();
    boolean b19 = treeset_b12.add((java.lang.Boolean)false);
    java.util.stream.Stream<java.lang.Boolean> stream_b20 = treeset_b12.stream();
    java.lang.Object[] obj_array21 = new java.lang.Object[] { treeset_b12 };
    java.lang.Object[] obj_array22 = treeset_b0.toArray(obj_array21);
    java.util.TreeSet<java.lang.Boolean> treeset_b23 = new java.util.TreeSet<java.lang.Boolean>((java.util.Collection<java.lang.Boolean>)treeset_b0);
    java.util.Iterator<java.lang.Boolean> iterator_b24 = treeset_b0.iterator();
    java.util.stream.Stream<java.lang.Boolean> stream_b25 = treeset_b0.parallelStream();
    java.util.TreeSet<java.lang.Boolean> treeset_b26 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array29 = new java.lang.Boolean[] { true, true };
    boolean b30 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b26, b_array29);
    treeset_b26.clear();
    java.lang.Boolean b33 = treeset_b26.lower((java.lang.Boolean)true);
    java.lang.Boolean b34 = treeset_b26.pollLast();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b37 = treeset_b26.headSet((java.lang.Boolean)true, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b38 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array41 = new java.lang.Boolean[] { true, true };
    boolean b42 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b38, b_array41);
    treeset_b38.clear();
    boolean b45 = treeset_b38.add((java.lang.Boolean)false);
    java.util.stream.Stream<java.lang.Boolean> stream_b46 = treeset_b38.stream();
    java.lang.Object[] obj_array47 = new java.lang.Object[] { treeset_b38 };
    java.lang.Object[] obj_array48 = treeset_b26.toArray(obj_array47);
    java.lang.Object[] obj_array49 = treeset_b0.toArray(obj_array48);
    java.util.TreeSet<java.lang.Boolean> treeset_b50 = new java.util.TreeSet<java.lang.Boolean>((java.util.SortedSet<java.lang.Boolean>)treeset_b0);
    treeset_b0.clear();
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array3);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b4 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b7);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b11);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array15);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b16 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b19 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(stream_b20);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array21);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array22);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b24);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(stream_b25);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array29);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b30 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b33);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(b34);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b37);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array41);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b42 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b45 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(stream_b46);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array47);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array48);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(obj_array49);

  }

  @Test
  public void test6() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test6"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array2 = new java.lang.Boolean[] { false };
    boolean b3 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array2);
    java.util.NavigableSet<java.lang.Boolean> navigableset_b6 = treeset_b0.headSet((java.lang.Boolean)false, true);
    java.util.stream.Stream<java.lang.Boolean> stream_b7 = treeset_b0.parallelStream();
    java.util.Comparator<java.lang.Object> comparator_obj8 = (Comparator<Object>) treeset_b0.comparator();
    java.lang.Boolean b10 = treeset_b0.floor((java.lang.Boolean)false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array2);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b3 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b6);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(stream_b7);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNull(comparator_obj8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue("'" + b10 + "' != '" + false+ "'", b10.equals(false));

  }

  @Test
  public void test7() throws Throwable {

    if (debug) { System.out.format("%n%s%n","RegressionTest1.test7"); }


    java.util.TreeSet<java.lang.Boolean> treeset_b0 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array3 = new java.lang.Boolean[] { true, true };
    boolean b4 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b0, b_array3);
    treeset_b0.clear();
    java.util.SortedSet<java.lang.Boolean> sortedset_b8 = treeset_b0.subSet((java.lang.Boolean)true, (java.lang.Boolean)true);
    boolean b10 = treeset_b0.add((java.lang.Boolean)true);
    java.util.TreeSet<java.lang.Boolean> treeset_b11 = new java.util.TreeSet<java.lang.Boolean>((java.util.SortedSet<java.lang.Boolean>)treeset_b0);
    java.util.TreeSet<java.lang.Boolean> treeset_b12 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array14 = new java.lang.Boolean[] { false };
    boolean b15 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b12, b_array14);
    java.util.NavigableSet<java.lang.Boolean> navigableset_b18 = treeset_b12.headSet((java.lang.Boolean)false, true);
    java.util.Iterator<java.lang.Boolean> iterator_b19 = treeset_b12.iterator();
    java.util.NavigableSet<java.lang.Boolean> navigableset_b22 = treeset_b12.headSet((java.lang.Boolean)false, false);
    java.util.TreeSet<java.lang.Boolean> treeset_b23 = new java.util.TreeSet<java.lang.Boolean>();
    java.lang.Boolean[] b_array26 = new java.lang.Boolean[] { true, true };
    boolean b27 = java.util.Collections.addAll((java.util.Collection<java.lang.Boolean>)treeset_b23, b_array26);
    treeset_b23.clear();
    java.util.Spliterator<java.lang.Boolean> spliterator_b29 = treeset_b23.spliterator();
    java.util.ArrayList<java.lang.Long> arraylist_long30 = new java.util.ArrayList<java.lang.Long>();
    java.lang.Long[] long_array32 = new java.lang.Long[] { 0L };
    boolean b33 = java.util.Collections.addAll((java.util.Collection<java.lang.Long>)arraylist_long30, long_array32);
    boolean b34 = treeset_b23.removeAll((java.util.Collection<java.lang.Long>)arraylist_long30);
    boolean b35 = treeset_b12.removeAll((java.util.Collection<java.lang.Long>)arraylist_long30);
    boolean b36 = treeset_b11.equals((java.lang.Object)arraylist_long30);
    boolean b38 = treeset_b11.add((java.lang.Boolean)true);
    java.util.SortedSet<java.lang.Boolean> sortedset_b40 = treeset_b11.headSet((java.lang.Boolean)false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array3);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b4 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b8);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b10 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array14);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b15 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b18);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(iterator_b19);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(navigableset_b22);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(b_array26);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b27 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(spliterator_b29);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(long_array32);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b33 == true);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b34 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b35 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b36 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertTrue(b38 == false);
    
    // Regression assertion (captures the current behavior of the code)
    org.junit.Assert.assertNotNull(sortedset_b40);

  }

}
